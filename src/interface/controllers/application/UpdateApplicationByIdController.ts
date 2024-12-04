import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { CreateApplicationDTO } from '../../dtos';
import { UpdateApplicationByIdUseCase } from '../../../use-cases/application';

export class UpdateApplicationByIdController {
  constructor(
    private readonly updateApplicationByIdUseCase: UpdateApplicationByIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const createApplicationDTO = plainToClass(
        CreateApplicationDTO,
        request.body,
      );
      await validateOrReject(createApplicationDTO);

      const application = await this.updateApplicationByIdUseCase.execute(
        request.params.id,
        createApplicationDTO,
      );

      return response
        .status(200)
        .json({ message: 'Candidatura editada com sucesso!' });
    } catch (error: any) {
      if (
        Array.isArray(error) &&
        error.every((e) => e instanceof ValidationError)
      ) {
        const formattedErrors = error.map((err: ValidationError) => ({
          field: err.property,
          errors: Object.values(err.constraints || {}),
        }));
        return response.status(400).json({ errors: formattedErrors });
      }

      console.error(error);
      return response.status(400).json({ message: error.message });
    }
  }
}
