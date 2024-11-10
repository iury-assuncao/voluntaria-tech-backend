import { Ong } from '../entities/Ong';

export interface OngRepository {
  findAll(): Promise<Ong[]>;
  findById(id: string): Promise<Ong | null>;
  findByCnpj(cnpj: string): Promise<Ong | null>;
  create(Ong: Ong): Promise<Ong>;
  update(id: string, Ong: Ong): Promise<void>;
  delete(id: string): Promise<void>;
}
