import { Ong } from '../entities/Ong';

export interface OngRepository {
  findAll(filters: Partial<Ong>): Promise<Ong[]>;
  findOne(filters: Partial<any>): Promise<Ong | null>;
  create(Ong: Ong): Promise<Ong>;
  update(id: string, Ong: Ong): Promise<void>;
  delete(id: string): Promise<void>;
}
