import { Voluntary } from '../entities/Voluntary';

export interface VoluntaryRepository {
  findAll(filters: Partial<Voluntary>): Promise<Voluntary[]>;
  findOne(filters: Partial<Voluntary>): Promise<Voluntary | null>;
  create(Voluntary: Voluntary): Promise<Voluntary>;
  update(id: string, Voluntary: Voluntary): Promise<void>;
  delete(id: string): Promise<void>;
}
