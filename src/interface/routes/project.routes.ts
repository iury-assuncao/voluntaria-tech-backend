import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import { CreateProjectUseCase } from '../../use-cases/project/CreateProjectUseCase';
import { MongoProjectRepository } from '../../infrastructure/repositories/MongoProjectRepository';
import { UserTypeEnum } from '../../domain/enums';
import { authenticateToken, permission } from '../middleware';
import { GetAllProjectsUseCase } from '../../use-cases/project/GetAllProjectsUseCase';
import { GetAllProjectsController } from '../controllers/projects/GetAllProjectsController';
import {
  GetProjectByIdUseCase,
  UpdateProjectByIdUseCase,
} from '../../use-cases/project';
import { GetProjectByIdController } from '../controllers/projects';
import { UpdateProjectByIdController } from '../controllers/projects/UpdateProjectByIdController';
import { UpdateOngByIdUseCase } from '../../use-cases/ong';
import { MongoOngRepository } from '../../infrastructure/repositories/MongoOngRepository';

export const projectRoutes = Router();

const projectRepository = new MongoProjectRepository();
const mongoOngRepository = new MongoOngRepository();

const createProjectUseCase = new CreateProjectUseCase(projectRepository);
const updateOngByIdUseCase = new UpdateOngByIdUseCase(mongoOngRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase,
  updateOngByIdUseCase,
);

const getAllProjecstUseCase = new GetAllProjectsUseCase(projectRepository);
const getAllProjectsController = new GetAllProjectsController(
  getAllProjecstUseCase,
);

const getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
const getProjectByIdController = new GetProjectByIdController(
  getProjectByIdUseCase,
);

const updateProjectByIdUseCase = new UpdateProjectByIdUseCase(
  projectRepository,
);
const updateProjectByIdController = new UpdateProjectByIdController(
  updateProjectByIdUseCase,
);

projectRoutes.post(
  '/',
  authenticateToken,
  permission(UserTypeEnum.ONG),
  createProjectController.handle.bind(createProjectController),
);

projectRoutes.get(
  '/',
  authenticateToken,
  getAllProjectsController.handle.bind(getAllProjectsController),
);

projectRoutes.get(
  '/:id',
  authenticateToken,
  getProjectByIdController.handle.bind(getProjectByIdController),
);

projectRoutes.put(
  '/:id',
  authenticateToken,
  permission(UserTypeEnum.ONG),
  updateProjectByIdController.handle.bind(updateProjectByIdController),
);
