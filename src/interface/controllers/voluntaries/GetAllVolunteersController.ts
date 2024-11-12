import { Request, Response } from 'express';
import { GetVoluntaryByUserIdIdUseCase } from '../../../use-cases/voluntary';

export class GetVoluntaryByUserIdController {
  constructor(
    private readonly getVoluntaryByUserIdIdUseCase: GetVoluntaryByUserIdIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const voluntary = await this.getVoluntaryByUserIdIdUseCase.execute(
        request.params.userId,
      );
      return response.status(200).json(voluntary);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
