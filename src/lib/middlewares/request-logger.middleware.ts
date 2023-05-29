import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();
export async function requestMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await prisma.apiRequest.create({
    data: {
      method: req.method,
      url: req.originalUrl,
      requestBody: JSON.stringify(req.body),
      requestHeaders: JSON.stringify(req.headers),
      requestParams: JSON.stringify(req.params),
      requestQuery: JSON.stringify(req.query),
    },
  });

  next();
}
