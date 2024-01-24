import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY!;

interface PayloadToken {
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: PayloadToken;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .send({ message: 'Authentification failed, No token provided' });
  }

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(403).send({ message: 'Token Expired' });
      } else {
        return res.status(401).send({ message: 'Unauthorized' });
      }
    }

    req.user = payload as PayloadToken;

    next();
  });
};
