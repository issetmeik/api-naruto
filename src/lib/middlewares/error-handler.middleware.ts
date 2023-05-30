import { NextFunction, Request, Response } from 'express';
import { ValidationException, HttpException } from '../../app/exceptions';
import { BaseHttpResponse } from '../../lib/base-http-response';
import { z } from 'zod';

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
    next();
  }

  if (err instanceof z.ZodError) {
    const error = err.issues.map((e) => ({
      path: e.path[0],
      message: e.message,
    }));

    res.status(409).json({
      data: null,
      error: error,
      statusCode: 409,
    });
    next();
  }
}
