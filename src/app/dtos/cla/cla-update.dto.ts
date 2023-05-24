import { ValidationException } from '../../exceptions';

export class ClaUpdateDto {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly icon?: string,
    public readonly name?: string,
    public readonly link?: string
  ) {}

  static from(body: Partial<ClaUpdateDto>) {
    if (!body.id) throw new ValidationException('Missing property id');
    if (!body.userId) throw new ValidationException('Missing property userId');

    return new ClaUpdateDto(
      body.id,
      body.userId,
      body.icon,
      body.name,
      body.link
    );
  }
}
