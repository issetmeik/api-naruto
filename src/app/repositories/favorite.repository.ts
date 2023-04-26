import { FavoriteTypes, PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { IFavorite } from '../interfaces/favorites-interface';
import {
  CreateFavoriteDto,
  FavoriteDeleteDto,
  FavoriteFindManyDto,
} from '../dtos';

@injectable()
export class FavoriteRepository {
  private readonly _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  async create(dto: CreateFavoriteDto): Promise<IFavorite> {
    return await this._db.favorite.create({
      data: {
        userId: dto.userId,
        type: dto.type,
        claId: dto.type === FavoriteTypes.cla ? dto.id : null,
        characterId: dto.type === FavoriteTypes.character ? dto.id : null,
      },
    });
  }

  async findOne(id: string): Promise<IFavorite | null> {
    return await this._db.favorite.findFirst({
      where: {
        id: id,
      },
    });
  }

  async find(dto: FavoriteFindManyDto): Promise<Array<IFavorite>> {
    return await this._db.favorite.findMany({
      skip: (dto.page - 1) * dto.pageSize,
      take: dto.pageSize,
      where: {
        userId: dto.userId,
      },
      include: {
        character: true,
        cla: true,
      },
    });
  }

  async delete(dto: FavoriteDeleteDto): Promise<void> {
    await this._db.favorite.delete({
      where: {
        id: dto.id,
      },
    });
  }
}
