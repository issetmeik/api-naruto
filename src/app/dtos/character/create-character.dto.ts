import { GenderType } from '@prisma/client';
import { ValidationException } from '../../exceptions';
import { z } from 'zod';

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

  static async from(body: Partial<CreateCharacterDto>) {
    if (!body.name) throw new ValidationException('Missing property name');
    if (!body.externalId)
      throw new ValidationException('Missing property externalId');
    if (!body.about) throw new ValidationException('Missing property about');
    if (!body.page) throw new ValidationException('Missing property page');
    if (!body.gender) throw new ValidationException('Missing property gender');
    if (!body.images) throw new ValidationException('Missing property images');
    if (!body.alive) throw new ValidationException('Missing property alive');

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
