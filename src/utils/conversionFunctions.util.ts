export const stringToNumber = (
  val: string | number | undefined | null,
  toFloat?: boolean,
  minimumValue?: number,
  fieldName?: string
) => {
  if (!val) return;
  if (typeof val == 'string') val = toFloat ? parseFloat(val) : parseInt(val);
  if (minimumValue && val < minimumValue)
    throw new InvalidFieldException(`${fieldName}`, val);
  return val;
};
