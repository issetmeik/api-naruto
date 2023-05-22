import { GenderType } from '@prisma/client';
import { ICla } from './cla-interface';

export interface ICharacter {
  id: string;
  externalId: string;
  name: string;
  about: string;
  page: string;
  gender: GenderType;
  images: string;
  alive: boolean;
  birthDate?: Date | null;
  age?: string | null;
  height?: string | null;
  weight?: string | null;
  bloodType?: string | null;
  occupation?: string | null;
  afiliation?: string | null;
  partner?: string | null;
  ninjaRank?: string | null;
  ninjaRegister?: string | null;
  claId?: string | null;

  createdAt: Date;
  updatedAt: Date;
}
