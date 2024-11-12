import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';

export class GetAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute() {
    return await this.projectRepository.findAll();
  }
}
