import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json({ message: 'Validation error', issues: err.format() });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};
