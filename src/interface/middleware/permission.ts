import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

export function permission(...allowedUserTypes: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
  ): void => {
    const userType = req.user?.userType;

    if (!userType) {
      res
        .status(403)
        .json({ message: 'Acesso negado: Usuário não identificado.' });
      return;
    }

    if (!allowedUserTypes.includes(userType)) {
      res
        .status(403)
        .json({ message: 'Acesso negado: Permissão insuficiente.' });
      return;
    }

    next();
  };
}
