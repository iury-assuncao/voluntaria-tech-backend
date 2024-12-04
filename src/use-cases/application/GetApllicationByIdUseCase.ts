import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';

export class GetApplicationByIdUseCase {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async execute(voluntaryId: string) {
    return await this.applicationRepository.findOne({ voluntaryId });
  }
}
