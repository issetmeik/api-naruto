import { ValidationException } from '../../exceptions';

export class ClaFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<ClaFindOneDto>) {
    if (!body.id) throw new ValidationException('Missing Id');

    return new ClaFindOneDto(body.id);
  }
}
