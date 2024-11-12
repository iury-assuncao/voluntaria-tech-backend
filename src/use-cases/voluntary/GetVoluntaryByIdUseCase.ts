import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class GetVoluntaryByIdUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute(id: string) {
    return await this.voluntaryRepository.findById(id);
  }
}
