import { User } from '../../domain/entities';
import { UserRepository } from '../../domain/interfaces/UserRepository';
import { UserModel } from '../models/UserModel';

export class MongoUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }
  async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({ email: email });
  }

  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }

  async update(id: string, User: User): Promise<void> {
    await UserModel.findByIdAndUpdate(id, User);
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
