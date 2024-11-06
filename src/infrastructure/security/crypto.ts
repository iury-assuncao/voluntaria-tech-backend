import bcrypt from 'bcrypt';
import { Cryptography } from '../../domain/interfaces/Cryptography';

export class BcryptCryptography implements Cryptography {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
