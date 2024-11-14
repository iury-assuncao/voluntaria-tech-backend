import { Router } from 'express';
import { LoginController } from '../controllers/auth/LoginController';
import { MongoUserRepository } from '../../infrastructure/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../infrastructure/security/crypto';
import { JwtToken } from '../../infrastructure/security/JwtToken';
import { LoginUserUseCase } from '../../use-cases/auth/LoginUserUseCase';

export const LoginRoutes = Router();

const userRepository = new MongoUserRepository();
const crypto = new BcryptCryptography();
const jwt = new JwtToken();

const loginUserUseCase = new LoginUserUseCase(userRepository, crypto, jwt);

const loginController = new LoginController(loginUserUseCase);

LoginRoutes.post('/', loginController.handle.bind(loginController));
