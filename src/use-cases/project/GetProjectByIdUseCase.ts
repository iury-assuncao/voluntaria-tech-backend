import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';

export class GetProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string) {
    return await this.projectRepository.findOne({ _id: id });
  }
}
