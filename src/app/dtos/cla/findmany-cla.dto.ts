export class ClaFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public readonly name?: string,
    public readonly externalId?: string
  ) {}

  static from(body: Partial<ClaFindManyDto>) {
    if (!body.page) throw new Error('Missing porperty page');
    if (!body.pageSize) throw new Error('Missing porperty id');

    return new ClaFindManyDto(
      body.page,
      body.pageSize,
      body.name,
      body.externalId
    );
  }
}
