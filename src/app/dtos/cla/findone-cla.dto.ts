export class ClaFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<ClaFindOneDto>) {
    if (!body.id) throw new Error('Missing Id');

    return new ClaFindOneDto(body.id);
  }
}
