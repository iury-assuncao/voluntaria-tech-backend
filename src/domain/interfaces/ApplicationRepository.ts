import { Application } from '../entities';

export interface ApplicationRepository {
  findAll(): Promise<Application[]>;
  findById(id: string): Promise<Application | null>;
  create(Application: Application): Promise<Application>;
  update(id: string, Application: Application): Promise<void>;
  delete(id: string): Promise<void>;
}
