import { UserTypeEnum } from '../../domain/enums';
import { MongoApplicationRepository } from '../../infrastructure/repositories/MongoApplicationRepository';
import {
  CreateApplicationUseCase,
  GetAllApplicationsUseCase,
} from '../../use-cases/application';
import { CreateApplicationController } from '../controllers/application';
import { GetAllApplicationController } from '../controllers/application/GetAllApplicationsController';
import { authenticateToken, permission } from '../middleware';
import { Router } from 'express';

export const applicationRoutes = Router();

const mongoApplicationRepository = new MongoApplicationRepository();

const createApplicationUseCase = new CreateApplicationUseCase(
  mongoApplicationRepository,
);
const createApplicationController = new CreateApplicationController(
  createApplicationUseCase,
);

const getAllApplicationsUseCase = new GetAllApplicationsUseCase(
  mongoApplicationRepository,
);
const getAllApplicationController = new GetAllApplicationController(
  getAllApplicationsUseCase,
);
applicationRoutes.post(
  '/',
  authenticateToken,
  permission(UserTypeEnum.VOLUNTARY),
  createApplicationController.handle.bind(createApplicationController),
);

applicationRoutes.get(
  '/',
  authenticateToken,
  getAllApplicationController.handle.bind(getAllApplicationController),
);
