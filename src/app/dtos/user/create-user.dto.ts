import { UserRoleType } from '@prisma/client';

export class CreateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string,
    public readonly role: UserRoleType = UserRoleType.CUSTOMER,
    public readonly birthDate: Date,
    public readonly password: string,
    public readonly externalId: string | undefined = undefined,
    public readonly createdAt?: string
  ) {}

  static from(body: Partial<CreateUserDto>) {
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.email) throw new Error('Missing porperty email');
    if (!body.avatar) throw new Error('Missing porperty avatar');
    if (!body.birthDate) throw new Error('Missing porperty birthDate');
    if (!body.password) throw new Error('Missing porperty password');

    return new CreateUserDto(
      body.name,
      body.email,
      body.avatar,
      body.role,
      body.birthDate,
      body.password,
      body.createdAt,
      body.externalId
    );
  }
}
