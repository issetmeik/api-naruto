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
    public readonly alive: string,
    public readonly claId?: string
  ) {}

  static from(body: Partial<CreateCharacterDto>) {
    if (!body.name) throw new ValidationException('Missing porperty name');
    if (!body.externalId)
      throw new ValidationException('Missing porperty externalId');
    if (!body.about) throw new ValidationException('Missing porperty about');
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.gender) throw new ValidationException('Missing porperty gender');
    if (!body.images) throw new ValidationException('Missing porperty images');
    if (!body.alive) throw new ValidationException('Missing porperty alive');
    return new CreateCharacterDto(
      body.name,
      body.externalId,
      body.about,
      body.page,
      body.gender,
      body.images,
      body.alive,
      body.claId
    );
  }
}
