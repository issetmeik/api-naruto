import { GenderType } from '@prisma/client';
import { ICla } from './cla-interface';

export interface ICharacter {
  id: string;
  externalId: string;
  name: string;
  about: string;
  gender: GenderType;
  birthDate: Date;
  age: string;
  height: string;
  weight: string;
  bloodType: string;
  occupation: string;
  afiliation: string;
  partner: string;
  ninjaRank: string;
  ninjaRegister: string;
  page: string;
  createdAt: Date;
  updatedAt: Date;
}
