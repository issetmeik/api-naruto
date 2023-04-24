import { injectable } from 'inversify';
import { CreateFavoriteDto, FavoriteDto, FavoriteFindOneDto } from '../dtos';
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
}
