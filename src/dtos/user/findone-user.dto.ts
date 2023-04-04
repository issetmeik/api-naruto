export class UserFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<UserFindOneDto>) {
    if (!body.id) throw new Error('Missing Id');

    return new UserFindOneDto(body.id);
  }
}
