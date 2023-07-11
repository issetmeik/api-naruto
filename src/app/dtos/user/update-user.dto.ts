import { ValidationException } from '../../exceptions';

export class UserUpdateDto {
  constructor(
    public readonly userId: string,
    public readonly avatar?: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly birthDate?: Date
  ) {}

  static from(body: Partial<UserUpdateDto>) {
    if (!body.userId) throw new ValidationException('Missing property ida');

    return new UserUpdateDto(
      body.userId,
      body.avatar,
      body.name,
      body.email,
      body.birthDate
    );
  }
}
