import { FavoriteTypes, PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { IFavorite } from '../interfaces/favorites-interface';
import { CreateFavoriteDto } from '../dtos';

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
}
