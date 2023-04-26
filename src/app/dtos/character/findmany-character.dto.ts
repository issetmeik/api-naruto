import { GenderType } from '@prisma/client';
import BaseFindManyDto from '../baseFindMany.dto';
import { ICla } from '../../interfaces/cla-interface';
import { ICharacter } from '../../interfaces/character-interface';

export class CharacterFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public orderBy: string = 'createdAt',
    public orderDescending?: boolean,
    public fromDate?: Date,
    public toDate?: Date,
    public paginate: boolean = true,
    public readonly name?: string,
    public readonly externalId?: string,
    public readonly gender?: GenderType,
    public readonly birthDate?: Date,
    public readonly age?: string,
    public readonly height?: string,
    public readonly weight?: string,
    public readonly bloodType?: string,
    public readonly claId?: string
  ) {}

  static from(body: Partial<CharacterFindManyDto>) {
    if (!body.page) throw new Error('Missing porperty page');
    if (!body.pageSize) throw new Error('Missing porperty id');

    return new CharacterFindManyDto(
      body.page,
      body.pageSize,
      body.orderBy,
      body.orderDescending,
      body.fromDate,
      body.toDate,
      body.paginate,
      body.name,
      body.externalId,
      body.gender,
      body.birthDate,
      body.age,
      body.height,
      body.weight,
      body.bloodType,
      body.claId
    );
  }
}
