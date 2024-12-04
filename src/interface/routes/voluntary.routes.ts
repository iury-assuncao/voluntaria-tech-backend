import { Router } from 'express';
import { authenticateToken, permission } from '../middleware';
import { MongoVoluntaryRepository } from '../../infrastructure/repositories/MongoVoluntaryRepository';
import {
  GetAllVolunteersUseCase,
  GetVoluntaryByUserIdIdUseCase,
  UpdateVoluntaryByIdUseCase,
} from '../../use-cases/voluntary';
import {
  GetAllVolunteersController,
  GetVoluntaryByUserIdController,
} from '../controllers/voluntaries';
import { UpdateVoluntaryByIdController } from '../controllers/voluntaries/UpdateVoluntaryByIdController';
import { UserTypeEnum } from '../../domain/enums';

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

const updateVoluntaryByIdUseCase = new UpdateVoluntaryByIdUseCase(
  voluntaryRepository,
);

const updateVoluntaryByIdController = new UpdateVoluntaryByIdController(
  updateVoluntaryByIdUseCase,
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

voluntaryRoutes.put(
  '/:id',
  authenticateToken,
  permission(UserTypeEnum.VOLUNTARY),
  updateVoluntaryByIdController.handle.bind(updateVoluntaryByIdController),
);
