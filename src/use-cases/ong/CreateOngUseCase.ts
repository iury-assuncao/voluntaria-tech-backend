import { Ong } from '../../domain/entities/Ong';
import { OngRepository } from '../../domain/interfaces/OngRepository';

export class CreateOngUseCase {
  constructor(private readonly ongRepository: OngRepository) {}

  async execute(ong: Ong) {
    const voluntaryAlreadyExists = await this.ongRepository.findByCnpj(
      ong.cnpj,
    );

    if (voluntaryAlreadyExists) {
      throw new Error('Ong já cadastrada com esse CNPJ!');
    }

    return await this.ongRepository.create(ong);
  }
}
