import { Request, Response } from 'express';
import { GetProjectByIdUseCase } from '../../../use-cases/project';

export class GetProjectByIdController {
  constructor(private readonly getProjectByIdUseCase: GetProjectByIdUseCase) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const project = await this.getProjectByIdUseCase.execute(
        request.params.id,
      );
      return response.status(200).json(project);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
