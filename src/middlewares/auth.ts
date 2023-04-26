import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config/auth';
import { Response, Request, NextFunction } from 'express';
import { IAuth } from '../app/interfaces/user-interface';

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
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decodedToken = jwt.verify(token, config.secret) as DecodedToken;

    const auth: IAuth = {
      token: token,
      userId: decodedToken.id,
    };

    req.body.auth = auth;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
