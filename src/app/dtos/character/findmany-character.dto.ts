import { ValidationException } from '../../exceptions';
import { stringToNumber } from '../../../utils/stringToNumber.utils';
//TODO: Verificar por quais partes iremos filtrar os personagens nos requisitos pedidos
export class CharacterFindManyDto {
  constructor(public page: number, public pageSize: number) {}

  static from(body: Partial<CharacterFindManyDto>) {
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.pageSize)
      throw new ValidationException('Missing porperty pageSize');

    body.page = stringToNumber(body.page, 1, 'page');
    body.pageSize = stringToNumber(body.pageSize, 1, 'pageSize');

    return new CharacterFindManyDto(body.page, body.pageSize);
  }
}
