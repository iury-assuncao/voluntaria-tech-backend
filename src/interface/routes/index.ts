import { Router } from 'express';
import { userRoutes } from './users.routes';
import { LoginRoutes } from './auth.routes';

const prefix = '/api';

export const routes = Router();

routes.use(`${prefix}/user`, userRoutes);
routes.use(`${prefix}/login`, LoginRoutes);
