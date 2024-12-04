import { Project } from '../../domain/entities';
import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';

export class CreateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(project: Project) {
    return await this.projectRepository.create(project);
  }
}
