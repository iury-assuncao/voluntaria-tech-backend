import { Voluntary } from '../entities/Voluntary';

export interface VoluntaryRepository {
  findAll(): Promise<Voluntary[]>;
  findById(id: string): Promise<Voluntary | null>;
  findByUserId(userId: string): Promise<Voluntary | null>;
  findByCpf(cpf: string): Promise<Voluntary | null>;
  create(Voluntary: Voluntary): Promise<Voluntary>;
  update(id: string, Voluntary: Voluntary): Promise<void>;
  delete(id: string): Promise<void>;
}
