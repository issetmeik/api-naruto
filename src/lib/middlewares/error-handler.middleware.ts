import { NextFunction, Request, Response } from 'express';
import { ValidationException, HttpException } from '../../app/exceptions';
import { BaseHttpResponse } from '../../lib/base-http-response';
import { ZodError } from 'zod';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ValidationException) {
    const response = BaseHttpResponse.failed(err.message);
    res.status(response.statusCode).json(response);
    next();
  }

  if (err instanceof HttpException) {
    const response = BaseHttpResponse.failed(err.message, err.statusCode);
    res.status(response.statusCode).json(response);
    next();
  }

  if (err instanceof Error) {
    const response = BaseHttpResponse.failed(err.message, 500);
    res.status(response.statusCode).json(response);
  }

  if (err instanceof ZodError) {
    const response = BaseHttpResponse.failed(err.message, 400);
    res.status(response.statusCode).json(response);
  }
}
