import { Application } from '../../domain/entities/Application';
import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';
import ApplicationModel from '../models/ApplicationModel';

export class MongoApplicationRepository implements ApplicationRepository {
  findOne(filters: Partial<Application>): Promise<Application | null> {
    return ApplicationModel.findOne(filters).populate('userId') as any;
  }

  async findAll(filters: Partial<Application>): Promise<Application[]> {
    return (await ApplicationModel.find(filters).populate('userId')) as any;
  }

  async create(Application: Application): Promise<any> {
    const newApplication = new ApplicationModel(Application);
    await newApplication.save();
    return newApplication;
  }

  async update(id: string, Application: Application): Promise<void> {
    await ApplicationModel.findByIdAndUpdate(id, Application);
  }

  async delete(id: string): Promise<void> {
    await ApplicationModel.findByIdAndDelete(id);
  }
}
