export class FavoriteFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<FavoriteFindOneDto>) {
    if (!body.id) throw new Error('Missing  porperty id');

    return new FavoriteFindOneDto(body.id);
  }
}
