import { GenderType } from '@prisma/client';

export class CreateCharacterDto {
  constructor(
    public readonly name: string,
    public readonly externalId: string,
    public readonly about: string,
    public readonly page: string,
    public readonly gender: GenderType,
    public readonly images: string,
    public readonly age?: string | undefined,
    public readonly height?: string | undefined,
    public readonly weight?: string | undefined,
    public readonly bloodType?: string | undefined,
    public readonly occupation?: string | undefined,
    public readonly afiliation?: string | undefined,
    public readonly partner?: string | undefined,
    public readonly ninjaRank?: string | undefined,
    public readonly ninjaRegister?: string | undefined,
    public readonly birthDate?: Date | undefined,
    public readonly claId?: string | undefined
  ) {}

  static from(body: Partial<CreateCharacterDto>) {
    if (!body.name) throw new Error('Missing porperty name');
    if (!body.externalId) throw new Error('Missing porperty externalId');
    if (!body.about) throw new Error('Missing porperty about');
    if (!body.page) throw new Error('Missing porperty page');
    if (!body.gender) throw new Error('Missing porperty gender');
    if (!body.images) throw new Error('Missing porperty images');

    return new CreateCharacterDto(
      body.name,
      body.externalId,
      body.about,
      body.page,
      body.gender,
      body.images,
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
      body.claId
    );
  }
}
