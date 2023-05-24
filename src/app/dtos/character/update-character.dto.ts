import { GenderType } from '@prisma/client';
import { ValidationException } from '../../exceptions';

export class UpdateCharacterDto {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly name?: string,
    public readonly about?: string,
    public readonly images?: string,
    public readonly gender?: GenderType,
    public readonly alive?: string,
    public readonly page?: string
  ) {}

  static from(body: Partial<UpdateCharacterDto>) {
    if (!body.id) throw new ValidationException('Missing property id');
    if (!body.userId) throw new ValidationException('Missing property userId');

    return new UpdateCharacterDto(
      body.id,
      body.userId,
      body.name,
      body.about,
      body.images,
      body.gender,
      body.alive,
      body.page
    );
  }
}
