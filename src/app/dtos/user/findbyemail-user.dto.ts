export class UserFindByEmailDto {
  constructor(public readonly email: string) {}

  static from(body: Partial<UserFindByEmailDto>) {
    if (!body.email) throw new Error('Missing Email');

    return new UserFindByEmailDto(body.email);
  }
}
