import { injectable } from 'inversify';
import {
  CreateUserDto,
  UserDto,
  UserFindByEmailDto,
  UserFindOneDto,
} from '../dtos';
import { IUser } from '../interfaces/user-interface';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcryptjs';
import { createUserSchema } from '../dtos';
import {
  ApiError,
  BadRequestError,
  NotFoundError,
} from '../../shared/errors/api-errors';

@injectable()
export class UserService {
  constructor(private readonly _userRepo: UserRepository) {}

  async findOne(user: UserFindOneDto): Promise<UserDto> {
    const foundUser = await this._userRepo.findOne(user.id);
    if (!foundUser) throw new Error('User not found');

    return UserDto.from(foundUser);
  }

  async create(user: CreateUserDto): Promise<UserDto> {
    const response = await this._userRepo.create(user);
    return this.findOne({ id: response.id });
  }

  async findByEmail(user: UserFindByEmailDto): Promise<UserDto> {
    const foundUser = await this._userRepo.findByEmail(user.email);
    if (!foundUser) throw new NotFoundError('User not found');

    return UserDto.from(foundUser);
  }

  checkPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
