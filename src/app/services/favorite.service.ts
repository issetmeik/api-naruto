import { injectable } from 'inversify';
import {
  CreateFavoriteDto,
  DeleteFavoriteDto,
  FavoriteDto,
  FavoriteFindManyDto,
  FavoriteFindOneDto,
} from '../dtos';
import { FavoriteRepository } from '../repositories/favorite.repository';
import { ClaService } from './cla.service';
import { CharacterService } from './character.service';
import { HttpException } from '../exceptions';

@injectable()
export class FavoriteService {
  constructor(
    private readonly _favoriteRepo: FavoriteRepository,
    private readonly _claService: ClaService,
    private readonly _characterService: CharacterService
  ) {}

  async create(favorite: CreateFavoriteDto): Promise<FavoriteDto> {
    if (favorite.type == 'character') {
      await this._characterService.findOne({ id: favorite.id });
    }

    if (favorite.type == 'cla') {
      await this._claService.findOne({ id: favorite.id });
    }

    const response = await this._favoriteRepo.create(favorite);
    return this.findOne({ id: response.id });
  }

  async findOne(favorite: FavoriteFindOneDto): Promise<FavoriteDto> {
    const foundFavorite = await this._favoriteRepo.findOne(favorite.id);
    if (!foundFavorite) throw new HttpException('Favorite not found', 404);

    return FavoriteDto.from(foundFavorite);
  }

  async findMany(dto: FavoriteFindManyDto): Promise<Array<FavoriteDto>> {
    const favorites = await this._favoriteRepo.find(dto);
    return FavoriteDto.fromMany(favorites);
  }

  async delete(dto: DeleteFavoriteDto): Promise<void> {
    const favorite = await this.findOne({ id: dto.id });
    if (favorite.userId != dto.userId) {
      throw new HttpException('operation not allowed', 400);
    }
    await this._favoriteRepo.delete(dto);
  }
}
