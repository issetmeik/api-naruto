export class DeleteFavoriteDto {
  constructor(public readonly id: string, public readonly userId: string) {}

  static from(body: Partial<DeleteFavoriteDto>) {
    if (!body.id) throw new Error('Missing porperty id');
    if (!body.userId) throw new Error('Missing porperty userId');

    return new DeleteFavoriteDto(body.id, body.userId);
  }
}
