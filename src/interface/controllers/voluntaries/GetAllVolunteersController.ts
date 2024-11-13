import { Request, Response } from 'express';
import { GetAllVolunteersUseCase } from '../../../use-cases/voluntary/GetAllVolunteersUseCase';

export class GetAllVolunteersController {
  constructor(
    private readonly getAllVolunteersUseCase: GetAllVolunteersUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const voluntary = await this.getAllVolunteersUseCase.execute();
      return response.status(200).json(voluntary);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
