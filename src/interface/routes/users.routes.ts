import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { LoginController } from '../controllers/auth/LoginController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();

userRoutes.post('/', createUserController.handle);
userRoutes.post('/login', loginController.handle);
