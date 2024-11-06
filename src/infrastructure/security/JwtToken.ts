import jwt from 'jsonwebtoken';
import { Jwtoken } from '../../domain/interfaces/Jwt';

export class JwtToken implements Jwtoken {
  private secretKey = process.env.SECRET_KEY || '';

  generateToken(payload: object): string {
    if (!this.secretKey) {
      throw new Error('SECRET_KET deve ser definida nas variáveis de ambiente');
    }
    return jwt.sign(payload, this.secretKey, { expiresIn: '1d' });
  }

  verifyToken(token: string): object | null {
    try {
      return jwt.verify(token, this.secretKey) as object;
    } catch (error) {
      console.error('Token verification failed:', error);
      return null;
    }
  }
}
