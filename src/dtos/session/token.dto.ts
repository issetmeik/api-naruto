export class TokenDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly token: string
  ) {}

  static from(body: Partial<TokenDto>) {
    if (!body.id) throw new Error('Missing porperty id');
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.email) throw new Error('Missing porperty email');
    if (!body.token) throw new Error('Missing porperty token');

    return new TokenDto(body.id, body.name, body.email, body.token);
  }
}
