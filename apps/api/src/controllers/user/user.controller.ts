import { keepLoginAction } from '@/actions/user/keeplogin.action';
import { loginAction } from '@/actions/user/login.action';
import { registerAction } from '@/actions/user/register.action';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerAction(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginAction(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user!.email;
      const result = await keepLoginAction(email as string);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
