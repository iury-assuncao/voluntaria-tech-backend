import { Application } from '../../domain/entities';
import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';

export class GetAllApplicationsUseCase {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async execute(filters: Partial<Application>) {
    return await this.applicationRepository.findAll(filters);
  }
}
