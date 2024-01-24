import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const redirectIfAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers['authorization'];

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY!);
      // Jika token valid, arahkan pengguna ke halaman utama
      return res.status(303).json({ message: 'You are already logged in.' });
    } catch (err) {
      // Jika token tidak valid, lanjutkan ke rute berikutnya
      next();
    }
  } else {
    // Jika tidak ada token, lanjutkan ke rute berikutnya
    next();
  }
};
