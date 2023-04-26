import { FavoriteTypes } from '@prisma/client';
import { ICla } from '../../interfaces/cla-interface';
import { ICharacter } from '../../interfaces/character-interface';

export class FavoriteDto {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly type: FavoriteTypes,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly cla?: ICla,
    public readonly character?: ICharacter
  ) {}

  static from(favorite: Partial<FavoriteDto>) {
    if (!favorite.id) throw new Error('Missing porperty id');
    if (!favorite.userId) throw new Error('Missing porperty userId');
    if (!favorite.type) throw new Error('Missing porperty favoriteType');
    if (!favorite.createdAt) throw new Error('Missing porperty createdAt');
    if (!favorite.updatedAt) throw new Error('Missing porperty updatedAt');

    return new FavoriteDto(
      favorite.id,
      favorite.userId,
      favorite.type,
      favorite.createdAt,
      favorite.updatedAt,
      favorite.cla,
      favorite.character
    );
  }

  static fromMany(favorites: Array<FavoriteDto>) {
    return favorites.map((favorite) => FavoriteDto.from(favorite));
  }
}
