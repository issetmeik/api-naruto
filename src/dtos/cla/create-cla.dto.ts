export class CreateClaDto {
  constructor(
    public readonly icon: string,
    public readonly name: string,
    public readonly link: string,
    public readonly externalId: string
  ) {}

  static from(body: Partial<CreateClaDto>) {
    if (!body.icon) throw new Error('Missing porperty icon');
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.link) throw new Error('Missing porperty link');
    if (!body.externalId) throw new Error('Missing porperty externalId');
    return new CreateClaDto(body.icon, body.name, body.link, body.externalId);
  }
}
