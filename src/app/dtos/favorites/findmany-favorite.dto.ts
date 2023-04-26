export class FavoriteFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public readonly userId: string
  ) {}

  static from(body: Partial<FavoriteFindManyDto>) {
    if (!body.userId) throw new Error('Missing porperty userId');
    if (!body.pageSize) throw new Error('Missing porperty pageSize');
    if (!body.page) throw new Error('Missing porperty page');

    return new FavoriteFindManyDto(body.page, body.pageSize, body.userId);
  }
}
