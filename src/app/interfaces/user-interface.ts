import { Favorites, UserRoleType } from '@prisma/client';

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRoleType;
  birthDate: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  externalId: string | null;
}

export interface IAuth {
  token: string;
  userId: string;
}
