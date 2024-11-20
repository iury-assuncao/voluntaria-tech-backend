import { Request, Response } from 'express';
import { GetApplicationByIdUseCase } from '../../../use-cases/application';

export class GetApplicationByIdController {
  constructor(
    private readonly getApllicationByIdUseCase: GetApplicationByIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const application = await this.getApllicationByIdUseCase.execute(
        request.params.id,
      );
      if (!application) {
        return response
          .status(400)
          .json({ message: 'Candidatura não encontrada' });
      }
      return response.status(200).json(application);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
