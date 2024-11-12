import { Router } from 'express';
import { userRoutes } from './users.routes';
import { LoginRoutes } from './auth.routes';
import { projectRoutes } from './project.routes';
import { ongRoutes } from './ong.routes';

const prefix = '/api';

export const routes = Router();

routes.use(`${prefix}/`, userRoutes);
routes.use(`${prefix}/login`, LoginRoutes);
routes.use(`${prefix}/project`, projectRoutes);
routes.use(`${prefix}/ong`, ongRoutes);
