import { stringToNumber } from '../../../utils/stringToNumber.utils';
import { ValidationException } from '../../exceptions';

export class ClaFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public readonly name?: string,
    public readonly externalId?: string
  ) {}

  static from(body: Partial<ClaFindManyDto>) {
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.pageSize)
      throw new ValidationException('Missing porperty pageSize');

    body.page = stringToNumber(body.page, 1, 'page');
    body.pageSize = stringToNumber(body.pageSize, 1, 'pageSize');

    return new ClaFindManyDto(
      body.page,
      body.pageSize,
      body.name,
      body.externalId
    );
  }
}
