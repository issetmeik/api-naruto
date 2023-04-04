import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { CreateUserDto, UserFindOneDto } from '../dtos';
import { IUser } from '../interfaces/user-interface';

@injectable()
export class UserRepository {
  private readonly _db: PrismaClient;

  constructor() {
    this._db = new PrismaClient();
  }

  async create(entity: CreateUserDto): Promise<IUser> {
    const passwordHash = await this.encryptPassword(entity.password);

    return await this._db.user.create({
      data: {
        name: entity.name,
        email: entity.email,
        avatar: entity.avatar,
        role: entity.role,
        password: passwordHash,
        birthDate: entity.birthDate,
        externalId: entity.externalId,
      },
    });
  }

  async findOne(entity: string): Promise<IUser | null> {
    return await this._db.user.findUnique({
      where: {
        id: entity,
      },
    });
  }
}
