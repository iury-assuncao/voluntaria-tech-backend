import { Project } from '../../domain/entities';
import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';

export class UpdateProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string, project: Project) {
    const ProjectAlreadyExists = await this.projectRepository.findOne({
      _id: id,
    });

    if (!ProjectAlreadyExists) {
      throw new Error('Projeto não encontrado!');
    }

    return await this.projectRepository.update(id, project);
  }
}
