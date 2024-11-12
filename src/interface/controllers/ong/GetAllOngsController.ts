import { Request, Response } from 'express';
import { GetAllOngsUseCase } from '../../../use-cases/ong';

export class GetAllongsController {
  constructor(private readonly getAllOngsUseCase: GetAllOngsUseCase) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const ongs = await this.getAllOngsUseCase.execute();
      return response.status(200).json(ongs);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
