import { FavoriteTypes } from '@prisma/client';
import { ValidationException } from '../../exceptions';

export class CreateFavoriteDto {
  constructor(
    public readonly type: FavoriteTypes,
    public readonly userId: string,
    public readonly id: string
  ) {}

  static from(body: Partial<CreateFavoriteDto>) {
    if (!body.type) throw new ValidationException('Missing porperty type');
    if (!body.userId) throw new ValidationException('Missing porperty userId');
    if (!body.id) throw new ValidationException('Missing porperty id');

    return new CreateFavoriteDto(body.type, body.userId, body.id);
  }
}
