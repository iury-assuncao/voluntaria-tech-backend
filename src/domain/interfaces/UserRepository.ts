import { User } from "../entities/User";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  create(User: User): Promise<User>;
  update(User: User): Promise<void>;
  delete(id: string): Promise<void>;
}
