import { Router } from 'express';
import { authenticateToken, permission } from '../middleware';
import { MongoOngRepository } from '../../infrastructure/repositories/MongoOngRepository';
import { GetAllOngsUseCase, GetOngByUserIdUseCase } from '../../use-cases/ong';
import {
  GetAllongsController,
  GetOngByUserIdController,
} from '../controllers/ong';

export const ongRoutes = Router();

const ongRepository = new MongoOngRepository();

const getAllOngsUseCase = new GetAllOngsUseCase(ongRepository);
const getAllOngsController = new GetAllongsController(getAllOngsUseCase);

const getOngByUserIdUseCase = new GetOngByUserIdUseCase(ongRepository);
const getOngByUserIdController = new GetOngByUserIdController(
  getOngByUserIdUseCase,
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
