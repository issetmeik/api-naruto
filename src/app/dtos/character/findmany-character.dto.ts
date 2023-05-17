import { ValidationException } from '../../exceptions';
import { stringToNumber } from '../../../utils/stringToNumber.utils';
import { GenderType } from '@prisma/client';
//TODO: Verificar por quais partes iremos filtrar os personagens nos requisitos pedidos
export class CharacterFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public readonly alive?: boolean,
    public readonly sex?: GenderType,
    public readonly name?: string,
    public readonly claId?: string
  ) {}

  static from(body: Partial<CharacterFindManyDto>) {
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.pageSize)
      throw new ValidationException('Missing porperty pageSize');

    body.page = stringToNumber(body.page, 1, 'page');
    body.pageSize = stringToNumber(body.pageSize, 1, 'pageSize');

    return new CharacterFindManyDto(
      body.page,
      body.pageSize,
      body.alive,
      body.sex,
      body.name,
      body.claId
    );
  }
}
