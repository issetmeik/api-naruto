import { ValidationException } from '../../exceptions';

export class DeleteFavoriteDto {
  constructor(public readonly id: string, public readonly userId: string) {}

  static from(body: Partial<DeleteFavoriteDto>) {
    if (!body.id) throw new ValidationException('Missing porperty id');
    if (!body.userId) throw new ValidationException('Missing porperty userId');

    return new DeleteFavoriteDto(body.id, body.userId);
  }
}
