import { stringToNumber } from '../../../utils/stringToNumber.utils';
import { ValidationException } from '../../exceptions';

export class FavoriteFindManyDto {
  constructor(
    public page: number,
    public pageSize: number,
    public readonly userId: string
  ) {}

  static from(body: Partial<FavoriteFindManyDto>) {
    if (!body.userId) throw new ValidationException('Missing porperty userId');
    if (!body.page) throw new ValidationException('Missing porperty page');
    if (!body.pageSize)
      throw new ValidationException('Missing porperty pageSize');

    body.page = stringToNumber(body.page, 1, 'page');
    body.pageSize = stringToNumber(body.pageSize, 1, 'pageSize');

    return new FavoriteFindManyDto(body.page, body.pageSize, body.userId);
  }
}
