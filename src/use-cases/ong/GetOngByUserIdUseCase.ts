import { OngRepository } from '../../domain/interfaces/OngRepository';

export class GetOngByUserIdUseCase {
  constructor(private readonly ongRepository: OngRepository) {}

  async execute(id: string) {
    return await this.ongRepository.findByUserId(id);
  }
}
