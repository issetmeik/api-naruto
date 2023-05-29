import { injectable } from 'inversify';
import {
  CreateUserDto,
  UserDto,
  UserFindByEmailDto,
  UserFindOneDto,
  UserUpdateDto,
} from '../dtos';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcryptjs';
import { HttpException } from '../exceptions';
import { S3Storage } from '../../utils/S3Storage';

@injectable()
export class UserService {
  constructor(
    private readonly _userRepo: UserRepository,
    private readonly s3: S3Storage
  ) {}

  async findOne(user: UserFindOneDto): Promise<UserDto> {
    const foundUser = await this._userRepo.findOne(user.id);
    if (!foundUser) throw new HttpException('User not found', 404);
    return UserDto.from(foundUser);
  }

  async create(user: CreateUserDto): Promise<UserDto> {
    const response = await this._userRepo.create(user);
    return this.findOne({ id: response.id });
  }

  async findByEmail(user: UserFindByEmailDto): Promise<UserDto> {
    const foundUser = await this._userRepo.findByEmail(user.email);
    if (!foundUser) throw new HttpException('User not found', 404);
    return UserDto.from(foundUser);
  }

  async updateOne(user: UserUpdateDto): Promise<void> {
    await this.findOne({ id: user.id });
    return this._userRepo.update(user);
  }

  checkPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async adminValidate(dto: UserFindOneDto): Promise<void> {
    const user = await this.findOne(dto);
    if (user.role !== 'ADMIN') {
      throw new HttpException('Operation now allowed', 401);
    }
  }

  async uploadImg(
    dto: UserFindOneDto,
    image: Express.Multer.File
  ): Promise<void> {
    const url = await this.s3.saveFile(image.filename);
    const user = await this.findOne(dto);
    const updateDto: UserUpdateDto = {
      id: user.id,
      avatar: url,
    };
    console.log('dto', user);
    await this.updateOne(updateDto);
  }
}
