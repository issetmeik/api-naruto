import { GenderType } from '@prisma/client';
import { ICla } from '../../interfaces/cla-interface';
import { ValidationException } from '../../exceptions';

export class CharacterDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly externalId: string,
    public readonly about: string,
    public readonly page: string,
    public readonly gender: GenderType,
    public readonly images: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly alive: boolean,
    public readonly cla?: ICla
  ) {}

  static from(body: Partial<CharacterDto>) {
    if (!body.id) throw new ValidationException('Missing porperty id');
    if (!body.name) throw new ValidationException('Missing porperty name');
    if (!body.externalId)
      throw new ValidationException('Missing porperty externalId');
    if (!body.about) throw new ValidationException('Missing porperty about');
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.gender) throw new ValidationException('Missing porperty gender');
    if (!body.images) throw new ValidationException('Missing porperty images');
    if (!body.createdAt)
      throw new ValidationException('Missing porperty createdAt');
    if (!body.updatedAt)
      throw new ValidationException('Missing porperty updatedAt');
    if (!body.alive) throw new ValidationException('Missing porperty alive');

    return new CharacterDto(
      body.id,
      body.name,
      body.externalId,
      body.about,
      body.page,
      body.gender,
      body.images,
      body.createdAt,
      body.updatedAt,
      body.alive,
      body.cla
    );
  }

  static fromMany(characters: Array<CharacterDto>) {
    return characters.map((character) => CharacterDto.from(character));
  }
}
