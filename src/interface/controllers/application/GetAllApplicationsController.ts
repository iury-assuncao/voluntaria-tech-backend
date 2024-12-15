import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../../types/AuthenticatedRequest';
import { GetAllApplicationsUseCase } from '../../../use-cases/application';

export class GetAllApplicationController {
  constructor(
    private readonly getAllApplicationsUseCase: GetAllApplicationsUseCase,
  ) {}

  public async handle(
    request: AuthenticatedRequest,
    response: Response,
  ): Promise<any> {
    try {
      const application = await this.getAllApplicationsUseCase.execute(
        request.query,
      );
      return response.status(200).json(application);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
