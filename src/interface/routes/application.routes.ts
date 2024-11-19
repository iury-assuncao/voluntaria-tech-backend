import { UserTypeEnum } from '../../domain/enums';
import { MongoApplicationRepository } from '../../infrastructure/repositories/MongoApplicationRepository';
import { CreateApplicationUseCase } from '../../use-cases/application';
import { CreateApplicationController } from '../controllers/application';
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
applicationRoutes.post(
  '/',
  authenticateToken,
  permission(UserTypeEnum.VOLUNTARY),
  createApplicationController.handle.bind(createApplicationController),
);
