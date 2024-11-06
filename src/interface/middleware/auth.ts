import { Request, Response, NextFunction } from 'express';
import { JwtToken } from '../../infrastructure/security/JwtToken';
import { User } from '../../domain/entities/user';

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const jwt = new JwtToken();
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded as User;
    next();
  } catch (error) {
    res.sendStatus(403).json();
  }
}
