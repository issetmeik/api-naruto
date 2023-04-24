import { FavoriteTypes } from '@prisma/client';

export interface IFavorite {
  id: string;
  userId: string;
  type: FavoriteTypes;
  createdAt: Date;
  updatedAt: Date;
  claId: string | null;
  characterId: string | null;
}
