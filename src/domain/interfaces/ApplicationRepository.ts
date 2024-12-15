import { Application } from '../entities';

export interface ApplicationRepository {
  findAll(filters: Partial<Application>): Promise<Application[]>;
  findOne(filters: Partial<Application>): Promise<Application | null>;
  create(Application: Application): Promise<Application>;
  update(id: string, Application: Partial<Application>): Promise<void>;
  delete(id: string): Promise<void>;
}
