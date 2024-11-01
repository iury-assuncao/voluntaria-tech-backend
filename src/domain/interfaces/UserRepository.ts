import { User } from '../entities/user';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(User: User): Promise<User>;
  update(id: string, User: User): Promise<void>;
  delete(id: string): Promise<void>;
}
