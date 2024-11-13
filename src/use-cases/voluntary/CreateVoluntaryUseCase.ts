import { Voluntary } from '../../domain/entities/Voluntary';
import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class CreateVoluntaryUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute(voluntary: Voluntary) {
    const voluntaryAlreadyExists = await this.voluntaryRepository.findOne({
      cpf: voluntary.cpf,
    });

    if (voluntaryAlreadyExists) {
      throw new Error('Voluntário já cadastrado com esse CPF!');
    }

    return await this.voluntaryRepository.create(voluntary);
  }
}
