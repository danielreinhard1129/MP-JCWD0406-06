import { UserController } from '@/controllers/user/user.controller';
import { verifyToken } from '@/middleware/jwtVerifyToken';
import { redirectIfAuthenticated } from '@/middleware/redirectIfAuthenticated';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      redirectIfAuthenticated,
      this.userController.registerUser,
    );
    this.router.post(
      '/login',
      redirectIfAuthenticated,
      this.userController.loginUser,
    );
    this.router.get('/keeplogin', verifyToken, this.userController.keepLogin);
  }

  getRouter(): Router {
    return this.router;
  }
}
