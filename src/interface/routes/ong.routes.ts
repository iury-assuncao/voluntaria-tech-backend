import { Router } from 'express';
import { authenticateToken, permission } from '../middleware';
import { MongoOngRepository } from '../../infrastructure/repositories/MongoOngRepository';
import {
  GetAllOngsUseCase,
  GetOngByUserIdUseCase,
  UpdateOngByIdUseCase,
} from '../../use-cases/ong';
import {
  GetAllongsController,
  GetOngByUserIdController,
  UpdateOngByIdController,
} from '../controllers/ong';
import { UserTypeEnum } from '../../domain/enums';

export const ongRoutes = Router();

const ongRepository = new MongoOngRepository();

const getAllOngsUseCase = new GetAllOngsUseCase(ongRepository);
const getAllOngsController = new GetAllongsController(getAllOngsUseCase);

const getOngByUserIdUseCase = new GetOngByUserIdUseCase(ongRepository);
const getOngByUserIdController = new GetOngByUserIdController(
  getOngByUserIdUseCase,
);

const updateOngByIdUseCase = new UpdateOngByIdUseCase(ongRepository);
const updateOngByIdController = new UpdateOngByIdController(
  updateOngByIdUseCase,
);

ongRoutes.get(
  '/',
  authenticateToken,
  getAllOngsController.handle.bind(getAllOngsController),
);

ongRoutes.get(
  '/:userId',
  authenticateToken,
  getOngByUserIdController.handle.bind(getOngByUserIdController),
);

ongRoutes.put(
  '/:id',
  authenticateToken,
  permission(UserTypeEnum.ONG),
  updateOngByIdController.handle.bind(updateOngByIdController),
);
