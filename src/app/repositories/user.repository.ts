import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { CreateUserDto, UserFindOneDto, UserUpdateDto } from '../dtos';
import { IUser } from '../interfaces/user-interface';
import * as bcrypt from 'bcryptjs';

@injectable()
export class UserRepository {
  private readonly _db: PrismaClient;

  constructor() {
    this._db = new PrismaClient();
  }

  async create(entity: CreateUserDto): Promise<IUser> {
    const hashPassword = await this.generateHash(entity.password);

    return await this._db.user.create({
      data: {
        name: entity.name,
        email: entity.email,
        avatar: entity.avatar,
        role: entity.role,
        password: hashPassword,
        birthDate: entity.birthDate,
        externalId: entity.externalId,
      },
    });
  }

  async findOne(id: string): Promise<IUser | null> {
    return await this._db.user.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(entity: string): Promise<IUser | null> {
    return await this._db.user.findFirst({
      where: {
        email: entity,
      },
    });
  }

  generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 8);
  }

  async update(entity: UserUpdateDto): Promise<void> {
    await this._db.user.update({
      where: {
        id: entity.userId,
      },
      data: {
        name: entity.name,
        email: entity.email,
        avatar: entity.avatar,
        birthDate: entity.birthDate,
      },
    });
  }
}
