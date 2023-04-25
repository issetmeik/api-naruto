export class FavoriteDeleteDto {
  constructor(public readonly id: string, public readonly userId: string) {}

  static from(body: Partial<FavoriteDeleteDto>) {
    if (!body.id) throw new Error('Missing porperty id');
    if (!body.userId) throw new Error('Missing porperty userId');

    return new FavoriteDeleteDto(body.id, body.userId);
  }
}
