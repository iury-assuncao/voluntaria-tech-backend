import { Ong } from '../../domain/entities/Ong';
import { OngRepository } from '../../domain/interfaces/OngRepository';

export class UpdateOngByIdUseCase {
  constructor(private readonly OngRepository: OngRepository) {}

  async execute(id: string, ong: any) {
    const ongAlreadyExists = await this.OngRepository.findOne({
      _id: id,
    });

    if (!ongAlreadyExists) {
      throw new Error('Ong não encontrada!');
    }

    return await this.OngRepository.update(id, ong);
  }
}
