import { Project } from '../../domain/entities';
import { ProjectRepository } from '../../domain/interfaces/ProjectRepository';
import ProjectModel from '../models/ProjectModel';

export class MongoProjectRepository implements ProjectRepository {
  async findAll(filters: Partial<Project>): Promise<Project[]> {
    return (await ProjectModel.find(filters)
      .populate('ongId')
      .populate('applications')) as any;
  }

  async findOne(filters: Partial<Project>): Promise<Project | null> {
    return (await ProjectModel.findById(filters)
      .populate('ongId')
      .populate('applications')) as any;
  }

  async create(Project: Project): Promise<any> {
    const newProject = new ProjectModel(Project);
    await newProject.save();
    return newProject;
  }

  async update(id: string, Project: Project): Promise<void> {
    await ProjectModel.findByIdAndUpdate(id, Project);
  }

  async delete(id: string): Promise<void> {
    await ProjectModel.findByIdAndDelete(id);
  }
}
