import { ValidationException } from '../../exceptions';

export class UserUpdateDto {
  constructor(
    public readonly id: string,
    public readonly avatar?: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly birthDate?: Date
  ) {}

  static from(body: Partial<UserUpdateDto>) {
    if (!body.id) throw new ValidationException('Missing property ida');

    return new UserUpdateDto(
      body.id,
      body.avatar,
      body.name,
      body.email,
      body.birthDate
    );
  }
}
