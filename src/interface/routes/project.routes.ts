import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import { CreateProjectUseCase } from '../../use-cases/project/CreateProjectUseCase';
import { MongoProjectRepository } from '../../infrastructure/repositories/MongoProjectRepository';
import { UserTypeEnum } from '../../domain/enums';
import { authenticateToken, permission } from '../middleware';

export const projectRoutes = Router();

const projectRepository = new MongoProjectRepository();
const createProjectUseCase = new CreateProjectUseCase(projectRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase,
);

projectRoutes.post(
  '/',
  authenticateToken,
  permission(UserTypeEnum.ONG),
  createProjectController.handle.bind(createProjectController),
);
