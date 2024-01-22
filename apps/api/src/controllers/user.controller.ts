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

  // async loginUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const result = await loginAction(req.body);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
