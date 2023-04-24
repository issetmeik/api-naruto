import { FavoriteTypes } from '@prisma/client';

export class CreateFavoriteDto {
  constructor(
    public readonly type: FavoriteTypes,
    public readonly userId: string,
    public readonly id: string
  ) {}

  static from(body: Partial<CreateFavoriteDto>) {
    if (!body.type) throw new Error('Missing porperty type');
    if (!body.userId) throw new Error('Missing porperty userId');
    if (!body.id) throw new Error('Missing porperty id');

    return new CreateFavoriteDto(body.type, body.userId, body.id);
  }
}
