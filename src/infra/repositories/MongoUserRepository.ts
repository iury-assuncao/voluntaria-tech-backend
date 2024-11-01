import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/interfaces/UserRepository';
import { UserModel } from '../models/UserModel';

export class MongoUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async create(User: User): Promise<User> {
    const newUser = new UserModel(User);
    await newUser.save();
    return newUser;
  }

  async update(User: User): Promise<void> {
    await UserModel.findByIdAndUpdate(User.id, User);
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
