import { Ong } from '../../domain/entities';
import { OngRepository } from '../../domain/interfaces/OngRepository';

export class GetAllOngsUseCase {
  constructor(private readonly ongRepository: OngRepository) {}

  async execute(filters: Partial<Ong>) {
    return await this.ongRepository.findAll(filters);
  }
}
