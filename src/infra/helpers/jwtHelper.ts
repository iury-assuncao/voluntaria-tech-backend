import { Jwtoken } from '../../domain/interfaces/Jwt';

export class Jwt implements Jwtoken {
  generateToken(payload: object): string {
    throw new Error('Method not implemented.');
  }
  verifyToken(token: string): object | null {
    throw new Error('Method not implemented.');
  }
}
