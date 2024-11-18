import { Application } from '../../domain/entities';
import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';

export class UpdateApplicationByIdUseCase {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async execute(id: string, application: Application) {
    return await this.applicationRepository.update(id, application);
  }
}
