import { ValidationException } from '../app/exceptions';

export const stringToNumber = (
  val: string | number,
  minValue?: number,
  fieldName?: string
): number => {
  if (!val) return NaN;
  if (typeof val == 'string') val = parseInt(val);
  if (minValue && val < minValue)
    throw new ValidationException(`${fieldName}, ${val}`);
  return Number(val);
};
