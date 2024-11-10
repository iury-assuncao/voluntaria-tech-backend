import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import { CreateProjectUseCase } from '../../use-cases/project/CreateProjectUseCase';
import { MongoProjectRepository } from '../../infrastructure/repositories/MongoProjectRepository';

export const projectRoutes = Router();

const projectRepository = new MongoProjectRepository();

const createProjectUseCase = new CreateProjectUseCase(projectRepository);

const createProjectController = new CreateProjectController(
  createProjectUseCase,
);

projectRoutes.post(
  '/',
  createProjectController.handle.bind(createProjectController),
);
