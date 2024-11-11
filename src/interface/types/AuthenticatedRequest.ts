import { User } from '../../domain/entities';
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: User;
}
