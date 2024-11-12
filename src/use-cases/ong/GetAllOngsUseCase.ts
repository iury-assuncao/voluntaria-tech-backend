import { OngRepository } from '../../domain/interfaces/OngRepository';

export class GetAllOngsUseCase {
  constructor(private readonly ongRepository: OngRepository) {}

  async execute() {
    return await this.ongRepository.findAll();
  }
}
