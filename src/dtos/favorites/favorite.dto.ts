import { FavoriteTypes } from '@prisma/client';

export class FavoriteDto {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly type: FavoriteTypes,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly characterId?: string | null,
    public readonly claId?: string | null
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
      favorite.claId,
      favorite.characterId
    );
  }

  static fromMany(favorites: Array<FavoriteDto>) {
    return favorites.map((favorite) => FavoriteDto.from(favorite));
  }
}
