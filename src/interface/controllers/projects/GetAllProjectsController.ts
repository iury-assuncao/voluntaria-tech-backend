import { Request, Response } from 'express';
import { GetAllProjectsUseCase } from '../../../use-cases/project/GetAllProjectsUseCase';

export class GetAllProjectsController {
  constructor(private readonly getAllProjecstUseCase: GetAllProjectsUseCase) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const project = await this.getAllProjecstUseCase.execute();
      return response.status(200).json(project);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
