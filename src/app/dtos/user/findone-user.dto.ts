import { ValidationException } from '../../exceptions';
export class UserFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<UserFindOneDto>) {
    if (!body.id) throw new ValidationException('Missing porperty id');

    return new UserFindOneDto(body.id);
  }
}
