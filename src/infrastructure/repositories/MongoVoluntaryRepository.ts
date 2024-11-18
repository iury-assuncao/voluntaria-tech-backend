import { Voluntary } from '../../domain/entities/Voluntary';
import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';
import { VoluntaryModel } from '../models/VoluntaryModel';

export class MongoVoluntaryRepository implements VoluntaryRepository {
  findOne(filters: Partial<Voluntary>): Promise<Voluntary | null> {
    return VoluntaryModel.findOne(filters).populate('userId') as any;
  }

  async findAll(filters: Partial<Voluntary>): Promise<Voluntary[]> {
    return (await VoluntaryModel.find(filters).populate('userId')) as any;
  }

  async findById(id: string): Promise<Voluntary | null> {
    return await VoluntaryModel.findById(id);
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
