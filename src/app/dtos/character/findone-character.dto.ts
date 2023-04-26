export class CharacterFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<CharacterFindOneDto>) {
    if (!body.id) throw new Error('Missing Id');

    return new CharacterFindOneDto(body.id);
  }
}
