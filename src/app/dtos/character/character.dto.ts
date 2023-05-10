import { GenderType } from '@prisma/client';
import { ICla } from '../../interfaces/cla-interface';

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
    public readonly age?: string | undefined | null,
    public readonly height?: string | undefined | null,
    public readonly weight?: string | undefined | null,
    public readonly bloodType?: string | undefined | null,
    public readonly occupation?: string | undefined | null,
    public readonly afiliation?: string | undefined | null,
    public readonly partner?: string | undefined | null,
    public readonly ninjaRank?: string | undefined | null,
    public readonly ninjaRegister?: string | undefined | null,
    public readonly birthDate?: Date | undefined | null,
    public readonly cla?: ICla
  ) {}

  static from(body: Partial<CharacterDto>) {
    if (!body.id) throw new Error('Missing porperty id');
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.externalId) throw new Error('Missing porperty externalId');
    if (!body.about) throw new Error('Missing porperty about');
    if (!body.page) throw new Error('Missing porperty page');
    if (!body.gender) throw new Error('Missing porperty gender');
    if (!body.images) throw new Error('Missing porperty images');
    if (!body.createdAt) throw new Error('Missing porperty createdAt');
    if (!body.updatedAt) throw new Error('Missing porperty updatedAt');

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
      body.age,
      body.height,
      body.weight,
      body.bloodType,
      body.occupation,
      body.afiliation,
      body.partner,
      body.ninjaRank,
      body.ninjaRegister,
      body.birthDate,
      body.cla
    );
  }

  static fromMany(characters: Array<CharacterDto>) {
    return characters.map((character) => CharacterDto.from(character));
  }
}
