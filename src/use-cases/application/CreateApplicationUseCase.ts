import { Application } from '../../domain/entities';
import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';

export class CreateApplicationUseCase {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async execute(ong: Application) {
    return await this.applicationRepository.create(ong);
  }
}
