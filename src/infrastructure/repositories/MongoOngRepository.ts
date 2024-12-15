import { Ong } from '../../domain/entities/Ong';
import { OngRepository } from '../../domain/interfaces/OngRepository';
import OngModel from '../models/OngModel';

export class MongoOngRepository implements OngRepository {
  findOne(filters: Partial<Ong>): Promise<Ong | null> {
    return OngModel.findOne(filters)
      .populate('userId')
      .populate('projects') as any;
  }

  async findAll(filters: Partial<Ong>): Promise<Ong[]> {
    return (await OngModel.find(filters)
      .populate('userId')
      .populate('projects')) as any;
  }

  async create(Ong: Ong): Promise<any> {
    const newOng = new OngModel(Ong);
    await newOng.save();
    return newOng;
  }

  async update(id: string, Ong: Ong): Promise<void> {
    await OngModel.findByIdAndUpdate(id, Ong);
  }

  async delete(id: string): Promise<void> {
    await OngModel.findByIdAndDelete(id);
  }
}
