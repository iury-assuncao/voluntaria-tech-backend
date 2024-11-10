import { Ong } from '../../domain/entities/Ong';
import { OngRepository } from '../../domain/interfaces/OngRepository';
import OngModel from '../models/OngModel';

export class MongoOngRepository implements OngRepository {
  findByCnpj(cnpj: string): Promise<Ong | null> {
    return OngModel.findOne({ cnpj });
  }
  async findAll(): Promise<Ong[]> {
    return await OngModel.find();
  }

  async findById(id: string): Promise<Ong | null> {
    return await OngModel.findById(id);
  }
  async findByEmail(email: string): Promise<Ong | null> {
    return await OngModel.findOne({ email: email });
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
