import { FavoriteTypes } from '@prisma/client';
import { ValidationException } from '../../exceptions';

export class CreateCsvFavoriteDto {
  constructor(
    public readonly type: FavoriteTypes,
    public readonly userId: string
  ) {}

  static from(body: Partial<CreateCsvFavoriteDto>) {
    if (!body.type) throw new ValidationException('Missing porperty type');
    if (!body.userId) throw new ValidationException('Missing porperty userId');

    return new CreateCsvFavoriteDto(body.type, body.userId);
  }
}
