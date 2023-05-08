import * as Yup from 'yup';

export const createUserSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  avatar: Yup.string().required(),
  birthDate: Yup.date().required(),
  externalId: Yup.number().nullable(),
});
