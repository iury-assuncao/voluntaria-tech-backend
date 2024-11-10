import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/register', createUserController.handle);
