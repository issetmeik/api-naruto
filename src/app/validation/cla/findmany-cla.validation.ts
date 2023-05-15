import { z } from 'zod';
export const findManyClaSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  externalId: z.string().nullable().default(''),
  name: z.string().nullable().default(''),
});
