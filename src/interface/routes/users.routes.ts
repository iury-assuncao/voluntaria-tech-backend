import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { MongoOngRepository } from '../../infrastructure/repositories/MongoOngRepository';
import { MongoUserRepository } from '../../infrastructure/repositories/MongoUserRepository';
import { MongoVoluntaryRepository } from '../../infrastructure/repositories/MongoVoluntaryRepository';
import { BcryptCryptography } from '../../infrastructure/security/crypto';
import { CreateUserUseCase } from '../../use-cases/CreateUserUseCase';
import { CreateOngUseCase } from '../../use-cases/ong';
import { CreateVoluntaryUseCase } from '../../use-cases/voluntary';

export const userRoutes = Router();

const userRepository = new MongoUserRepository();
const voluntaryRepository = new MongoVoluntaryRepository();
const ongRepository = new MongoOngRepository();
const crypto = new BcryptCryptography();

const createUserUseCase = new CreateUserUseCase(userRepository, crypto);
const createVoluntaryUseCase = new CreateVoluntaryUseCase(voluntaryRepository);
const createOngUseCase = new CreateOngUseCase(ongRepository);

const createUserController = new CreateUserController(
  createUserUseCase,
  createVoluntaryUseCase,
  createOngUseCase,
);

userRoutes.post(
  '/register',
  createUserController.handle.bind(createUserController),
);
