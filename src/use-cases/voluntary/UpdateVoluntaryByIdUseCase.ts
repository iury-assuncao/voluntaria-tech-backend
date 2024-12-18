import { Voluntary } from '../../domain/entities/Voluntary';
import { VoluntaryRepository } from '../../domain/interfaces/VoluntaryRepository';

export class UpdateVoluntaryByIdUseCase {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}

  async execute(id: string, voluntary: Voluntary) {
    const voluntaryAlreadyExists = await this.voluntaryRepository.findOne({
      _id: id,
    });

    if (!voluntaryAlreadyExists) {
      throw new Error('Voluntário não encontrado!');
    }

    return await this.voluntaryRepository.update(id, voluntary);
  }
}
