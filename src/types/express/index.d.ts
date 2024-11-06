import { User } from '../../domain/entities/User'; // Importe o tipo User

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
