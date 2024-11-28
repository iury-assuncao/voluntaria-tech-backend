import { Request, Response } from 'express';
import { UpdateApplicationByIdUseCase } from '../../../use-cases/application';

export class UpdateStatusApplicationByIdController {
  constructor(
    private readonly updateApplicationByIdUseCase: UpdateApplicationByIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const { status } = request.body;

      if (!status) {
        throw new Error("O campo 'status' é obrigatório.");
      }
      const application = await this.updateApplicationByIdUseCase.execute(
        request.params.id,
        { status },
      );

      return response
        .status(200)
        .json({ message: 'Candidatura editada com sucesso!' });
    } catch (error: any) {
      console.error(error);
      return response.status(400).json({ message: error.message });
    }
  }
}
