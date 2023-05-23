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
  claId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
