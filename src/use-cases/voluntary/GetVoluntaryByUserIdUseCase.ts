import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class GetVoluntaryByUserIdIdUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute(id: string) {
    return await this.voluntaryRepository.findOne({ userId: id });
  }
}
