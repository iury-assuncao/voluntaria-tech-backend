import { Project } from '../../domain/entities';
import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';

export class GetAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(filters: Partial<Project>) {
    return await this.projectRepository.findAll(filters);
  }
}
