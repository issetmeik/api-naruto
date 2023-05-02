export class CreateClaDto {
  constructor(
    public readonly name: string,
    public readonly link: string,
    public readonly externalId: string,
    public readonly icon: string | null = null
  ) {}

  static from(body: Partial<CreateClaDto>) {
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.link) throw new Error('Missing porperty link');
    if (!body.externalId) throw new Error('Missing porperty externalId');
    return new CreateClaDto(body.name, body.link, body.externalId, body.icon);
  }
}
