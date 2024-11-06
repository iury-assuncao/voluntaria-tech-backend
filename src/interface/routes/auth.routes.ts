import { Router } from 'express';
import { LoginController } from '../controllers/auth/LoginController';

export const LoginRoutes = Router();

const loginController = new LoginController();

LoginRoutes.post('/', loginController.handle);
