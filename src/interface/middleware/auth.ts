import { Request, Response, NextFunction } from 'express';
import { JwtToken } from '../../infrastructure/security/JwtToken';
import { User } from '../../domain/entities';

interface AuthenticatedRequest extends Request {
  user?: User;
}

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
  } catch (error) {
    res.sendStatus(403);
  }
}
