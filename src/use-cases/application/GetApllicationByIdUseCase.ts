import { ApplicationRepository } from '../../domain/interfaces/ApplicationRepository';

export class GetApplicationByIdUseCase {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async execute(id: string) {
    return await this.applicationRepository.findOne({ _id: id });
  }
}
