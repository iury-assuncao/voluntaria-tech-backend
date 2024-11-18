import { Project } from '../entities';

export interface ProjectRepository {
  findAll(filters: Partial<Project>): Promise<Project[]>;
  findOne(filters: Partial<Project>): Promise<Project | null>;
  create(Project: Project): Promise<Project>;
  update(id: string, Project: Project): Promise<void>;
  delete(id: string): Promise<void>;
}
