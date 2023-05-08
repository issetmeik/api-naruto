import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../shared/errors/api-errors';

export const errorHandler = (
  err: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Internal server error';
  console.log('message', message);
  return res.status(statusCode).json({ message });
};
