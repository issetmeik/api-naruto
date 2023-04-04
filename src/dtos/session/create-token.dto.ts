export class CreateTokenDto {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static from(body: Partial<CreateTokenDto>) {
    if (!body.email) throw new Error('Missing porperty email');
    if (!body.password) throw new Error('Missing porperty password');

    return new CreateTokenDto(body.email, body.password);
  }
}
