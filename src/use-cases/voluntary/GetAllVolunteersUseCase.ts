import { Voluntary } from '../../domain/entities';
import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class GetAllVolunteersUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute(filters: Partial<Voluntary>) {
    return await this.voluntaryRepository.findAll(filters);
  }
}
