import { claimReferralCodeAction } from '@/actions/rewards/claimReferralCode.action';
import { forgotPasswordAction } from '@/actions/user/forgotpassword.action';
import { getUserByReferralAction } from '@/actions/user/getUserByReferral.action';
import { keepLoginAction } from '@/actions/user/keeplogin.action';
import { loginAction } from '@/actions/user/login.action';
import { registerAction } from '@/actions/user/register.action';
import { resetPasswordAction } from '@/actions/user/resetpassword.action';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerAction(req.body, req.body.referral_number);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async getUserByReferral(req: Request, res: Response, next: NextFunction) {
    try {
      const referralNumber = req.params.referralNumber;
      const result = await getUserByReferralAction(referralNumber);
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

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await forgotPasswordAction(req.body.email);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user!.email;

      const result = await resetPasswordAction(email, req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async claimRefferal(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await claimReferralCodeAction(req.body.referral_number);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async claimReward(req: Request, res: Response, next: NextFunction) {
    try {
      const referralCode = req.body.referralCode;
      console.log('referralCode', referralCode);
      const result = await claimReferralCodeAction(referralCode);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
