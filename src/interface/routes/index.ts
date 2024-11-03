import { Router } from 'express';
import { userRoutes } from './users.routes';
const prefix = '/api';
export const routes = Router();

routes.use(`${prefix}/user`, userRoutes);
