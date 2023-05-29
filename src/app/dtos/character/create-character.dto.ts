import { GenderType } from '@prisma/client';
import { ValidationException } from '../../exceptions';
import { ZodError, z } from 'zod';
import { type } from 'os';

const schema = z.object({
  name: z.string(),
  externalId: z.string(),
  about: z.string(),
  page: z.string(),
  gender: z.enum(['MAN', 'WOMEN', 'UNDEFINED']),
  images: z.string(),
  alive: z.string(),
  claId: z.string().optional().nullable(),
});
export class CreateCharacterDto {
  constructor(
    public readonly name: string,
    public readonly externalId: string,
    public readonly about: string,
    public readonly page: string,
    public readonly gender: GenderType,
    public readonly images: string,
    public readonly alive: string,
    public readonly claId?: string | null
  ) {}

  static async from(body: Partial<CreateCharacterDto>) {
    try {
      const validate = schema.parse(body);
      console.log(validate);

      return new CreateCharacterDto(
        validate.name,
        validate.externalId,
        validate.about,
        validate.page,
        validate.gender,
        validate.images,
        validate.alive,
        validate.claId
      );
    } catch (error) {
      let err = error;
      if (err instanceof ZodError) {
        err = err.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));
        console.log(err);
      }
      throw error;
    }
  }
}
