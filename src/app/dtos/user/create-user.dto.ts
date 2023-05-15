import { UserRoleType } from '@prisma/client';
import { ValidationException } from '../../exceptions';

export class CreateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string,
    public readonly role: UserRoleType = UserRoleType.CUSTOMER,
    public readonly birthDate: Date,
    public readonly password: string,
    public readonly externalId?: string
  ) {}

  static from(body: Partial<CreateUserDto>) {
    if (!body.name) throw new ValidationException('Missing porperty name');
    if (!body.email) throw new ValidationException('Missing porperty email');
    if (!body.avatar) throw new ValidationException('Missing porperty avatar');
    if (!body.birthDate)
      throw new ValidationException('Missing porperty birthDate');
    if (!body.password)
      throw new ValidationException('Missing porperty password');
    return new CreateUserDto(
      body.name,
      body.email,
      body.avatar,
      body.role,
      body.birthDate,
      body.password,
      body.externalId
    );
  }
}
