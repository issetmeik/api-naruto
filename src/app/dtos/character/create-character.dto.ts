import { GenderType } from '@prisma/client';
import { ValidationException } from '../../exceptions';

export class CreateCharacterDto {
  constructor(
    public readonly name: string,
    public readonly externalId: string,
    public readonly about: string,
    public readonly page: string,
    public readonly gender: GenderType,
    public readonly images: string,
    public readonly age?: string,
    public readonly height?: string,
    public readonly weight?: string,
    public readonly bloodType?: string,
    public readonly occupation?: string,
    public readonly afiliation?: string,
    public readonly partner?: string,
    public readonly ninjaRank?: string,
    public readonly ninjaRegister?: string,
    public readonly birthDate?: Date,
    public readonly claId?: string,
    public readonly alive?: boolean
  ) {}

  static from(body: Partial<CreateCharacterDto>) {
    if (!body.name) throw new ValidationException('Missing porperty name');
    if (!body.externalId)
      throw new ValidationException('Missing porperty externalId');
    if (!body.about) throw new ValidationException('Missing porperty about');
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.gender) throw new ValidationException('Missing porperty gender');
    if (!body.images) throw new ValidationException('Missing porperty images');

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
      body.claId,
      body.alive
    );
  }
}
