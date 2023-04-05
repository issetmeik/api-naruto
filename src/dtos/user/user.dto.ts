import { UserRoleType } from '@prisma/client';

export class UserDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string,
    public readonly role: UserRoleType,
    public readonly birthDate: Date,
    public readonly password: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly externalId?: string | null
  ) {}

  static from(user: Partial<UserDto>) {
    if (!user.id) throw new Error('Missing porperty id');
    if (!user.name) throw new Error('Missing porperty name');
    if (!user.email) throw new Error('Missing porperty email');
    if (!user.avatar) throw new Error('Missing porperty avatar');
    if (!user.role) throw new Error('Missing porperty role');
    if (!user.password) throw new Error('Missing porperty password');
    if (!user.birthDate) throw new Error('Missing porperty birthDate');
    if (!user.createdAt) throw new Error('Missing porperty createdAt');
    if (!user.updatedAt) throw new Error('Missing porperty updatedAt');

    return new UserDto(
      user.id,
      user.name,
      user.email,
      user.avatar,
      user.role,
      user.birthDate,
      user.password,
      user.createdAt,
      user.updatedAt,
      user.externalId
    );
  }

  static fromMany(users: Array<UserDto>) {
    return users.map((user) => UserDto.from(user));
  }
}
