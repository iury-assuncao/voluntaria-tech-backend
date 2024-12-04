import { Response, NextFunction } from 'express';
import { JwtToken } from '../../infrastructure/security/JwtToken';
import { User } from '../../domain/entities';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

const jwt = new JwtToken();

export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }
  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded as User;
    next();
  } catch (error: any) {
    res.status(401).json({ message: 'Authentication Failed' });
  }
}
