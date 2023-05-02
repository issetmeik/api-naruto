import { ICharacter } from './character-interface';

export interface ICla {
  id: string;
  name: string;
  link: string;
  icon: string | null;
  createdAt: Date;
  updatedAt: Date;
  externalId: string;
  character?: ICharacter[];
}
