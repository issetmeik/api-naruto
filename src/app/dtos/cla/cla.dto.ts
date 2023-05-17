import { ValidationException } from '../../exceptions';
import { ICharacter } from '../../interfaces/character-interface';

export class ClaDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly link: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly externalId: string,
    public readonly icon: string | null = null,
    public readonly Character?: ICharacter[]
  ) {}

  static from(body: Partial<ClaDto>) {
    if (!body.id) throw new ValidationException('Missing porperty id');
    if (!body.name) throw new ValidationException('Missing porperty name');
    if (!body.link) throw new ValidationException('Missing porperty link');
    if (!body.createdAt)
      throw new ValidationException('Missing porperty createdAt');
    if (!body.updatedAt)
      throw new ValidationException('Missing porperty updatedAt');
    if (!body.externalId)
      throw new ValidationException('Missing porperty externalId');

    return new ClaDto(
      body.id,
      body.name,
      body.link,
      body.createdAt,
      body.updatedAt,
      body.externalId,
      body.icon,
      body.Character
    );
  }

  static fromMany(clas: Array<ClaDto>) {
    return clas.map((cla) => ClaDto.from(cla));
  }
}
