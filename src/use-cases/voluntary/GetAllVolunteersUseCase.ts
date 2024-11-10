import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class GetAllVolunteersUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute() {
    return await this.voluntaryRepository.findAll();
  }
}
