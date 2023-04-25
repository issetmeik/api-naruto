import { injectable } from 'inversify';
import {
  CreateFavoriteDto,
  FavoriteDeleteDto,
  FavoriteDto,
  FavoriteFindManyDto,
  FavoriteFindOneDto,
} from '../dtos';
import { FavoriteRepository } from '../repositories/favorite.repository';

@injectable()
export class FavoriteService {
  constructor(private readonly _favoriteRepo: FavoriteRepository) {}

  async create(favorite: CreateFavoriteDto): Promise<FavoriteDto> {
    const response = await this._favoriteRepo.create(favorite);
    return this.findOne({ id: response.id });
  }

  async findOne(favorite: FavoriteFindOneDto): Promise<FavoriteDto> {
    const foundFavorite = await this._favoriteRepo.findOne(favorite.id);
    if (!foundFavorite) throw new Error('Favorite not found');

    return FavoriteDto.from(foundFavorite);
  }

  async findMany(dto: FavoriteFindManyDto): Promise<Array<FavoriteDto>> {
    const favorites = await this._favoriteRepo.find(dto);
    return FavoriteDto.fromMany(favorites);
  }

  async delete(dto: FavoriteDeleteDto): Promise<void> {
    const favorite = await this.findOne({ id: dto.id });
    if (favorite.userId != dto.userId) {
      throw new Error('operation not allowed');
    }
    await this._favoriteRepo.delete(dto);
  }
}
