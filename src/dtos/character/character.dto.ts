import { GenderType } from '@prisma/client';
import { ICla } from '../../interfaces/cla-interface';

export class CharacterDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly externalId: string,
    public readonly about: string,
    public readonly gender: GenderType,
    public readonly birthDate: Date,
    public readonly age: string,
    public readonly height: string,
    public readonly weight: string,
    public readonly bloodType: string,
    public readonly occupation: string,
    public readonly afiliation: string,
    public readonly partner: string,
    public readonly ninjaRank: string,
    public readonly ninjaRegister: string,
    public readonly page: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly cla?: ICla
  ) {}

  static from(body: Partial<CharacterDto>) {
    if (!body.id) throw new Error('Missing porperty id');
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.externalId) throw new Error('Missing porperty externalId');
    if (!body.about) throw new Error('Missing porperty about');
    if (!body.gender) throw new Error('Missing porperty gender');
    if (!body.birthDate) throw new Error('Missing porperty birthDate');
    if (!body.age) throw new Error('Missing porperty age');
    if (!body.height) throw new Error('Missing porperty height');
    if (!body.weight) throw new Error('Missing porperty weight');
    if (!body.bloodType) throw new Error('Missing porperty bloodType');
    if (!body.occupation) throw new Error('Missing porperty occupation');
    if (!body.afiliation) throw new Error('Missing porperty afiliation');
    if (!body.partner) throw new Error('Missing porperty partner');
    if (!body.ninjaRank) throw new Error('Missing porperty ninjaRank');
    if (!body.ninjaRegister) throw new Error('Missing porperty ninjaRegister');
    if (!body.page) throw new Error('Missing porperty page');
    if (!body.createdAt) throw new Error('Missing porperty createdAt');
    if (!body.updatedAt) throw new Error('Missing porperty updatedAt');

    return new CharacterDto(
      body.id,
      body.name,
      body.externalId,
      body.about,
      body.gender,
      body.birthDate,
      body.age,
      body.height,
      body.weight,
      body.bloodType,
      body.occupation,
      body.afiliation,
      body.partner,
      body.ninjaRank,
      body.ninjaRegister,
      body.page,
      body.createdAt,
      body.updatedAt,
      body.cla
    );
  }

  static fromMany(characters: Array<CharacterDto>) {
    return characters.map((character) => CharacterDto.from(character));
  }
}
