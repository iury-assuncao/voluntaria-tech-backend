import { Router } from 'express';
import { authenticateToken, permission } from '../middleware';
import { MongoVoluntaryRepository } from '../../infrastructure/repositories/MongoVoluntaryRepository';
import {
  GetAllVolunteersUseCase,
  GetVoluntaryByUserIdIdUseCase,
} from '../../use-cases/voluntary';
import {
  GetAllVolunteersController,
  GetVoluntaryByUserIdController,
} from '../controllers/voluntaries';

export const voluntaryRoutes = Router();

const voluntaryRepository = new MongoVoluntaryRepository();

const getAllVolunteersUseCase = new GetAllVolunteersUseCase(
  voluntaryRepository,
);
const getAllVolunteersController = new GetAllVolunteersController(
  getAllVolunteersUseCase,
);

const getVoluntaryByUserIdIdUseCase = new GetVoluntaryByUserIdIdUseCase(
  voluntaryRepository,
);
const getVoluntaryByUserIdController = new GetVoluntaryByUserIdController(
  getVoluntaryByUserIdIdUseCase,
);

voluntaryRoutes.get(
  '/',
  authenticateToken,
  getAllVolunteersController.handle.bind(getAllVolunteersController),
);

voluntaryRoutes.get(
  '/:userId',
  authenticateToken,
  getVoluntaryByUserIdController.handle.bind(getVoluntaryByUserIdController),
);
