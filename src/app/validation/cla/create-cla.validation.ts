import { z } from 'zod';
export const createClaSchema = z.object({
  externalId: z.string(),
  icon: z.string().nullable(),
  link: z.string(),
  name: z.string(),
});
