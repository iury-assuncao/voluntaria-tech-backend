import { Request, Response } from 'express';
import { GetOngByUserIdUseCase } from '../../../use-cases/ong';

export class GetOngByUserIdController {
  constructor(private readonly getOngByUserIdUseCase: GetOngByUserIdUseCase) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const ong = await this.getOngByUserIdUseCase.execute(
        request.params.userId,
      );
      return response.status(200).json(ong);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
