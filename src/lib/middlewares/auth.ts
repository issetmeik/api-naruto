import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config/auth';
import { Response, Request, NextFunction } from 'express';
import { HttpException } from '../../app/exceptions';

interface DecodedToken extends JwtPayload {
  id: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new HttpException('Token not found', 401);
  }

  try {
    const decodedToken = jwt.verify(token, config.secret) as DecodedToken;

    req.body.userId = decodedToken.id;
    next();
  } catch (err) {
    throw new HttpException('Invalid token', 401);
  }
}
