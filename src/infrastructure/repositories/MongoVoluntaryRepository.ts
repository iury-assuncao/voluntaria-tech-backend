import { Voluntary } from '../../domain/entities/Voluntary';
import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';
import { VoluntaryModel } from '../models/VoluntaryModel';

export class MongoVoluntaryRepository implements VoluntaryRepository {
  findByUserId(userId: string): Promise<Voluntary | null> {
    return VoluntaryModel.findOne({ userId });
  }
  findByCpf(cpf: string): Promise<Voluntary | null> {
    return VoluntaryModel.findOne({ cpf });
  }
  async findAll(): Promise<Voluntary[]> {
    return await VoluntaryModel.find();
  }

  async findById(id: string): Promise<Voluntary | null> {
    return await VoluntaryModel.findById(id);
  }
  async findByEmail(email: string): Promise<Voluntary | null> {
    return await VoluntaryModel.findOne({ email: email });
  }

  async create(Voluntary: Voluntary): Promise<any> {
    const newVoluntary = new VoluntaryModel(Voluntary);
    await newVoluntary.save();
    return newVoluntary;
  }

  async update(id: string, Voluntary: Voluntary): Promise<void> {
    await VoluntaryModel.findByIdAndUpdate(id, Voluntary);
  }

  async delete(id: string): Promise<void> {
    await VoluntaryModel.findByIdAndDelete(id);
  }
}
