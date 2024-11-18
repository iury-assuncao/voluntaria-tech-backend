import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { CreateProjectDTO } from '../../dtos';
import { UpdateProjectByIdUseCase } from '../../../use-cases/project';

export class UpdateProjectByIdController {
  constructor(
    private readonly updateProjectByIdUseCase: UpdateProjectByIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const createOngDTO = plainToClass(CreateProjectDTO, request.body);
      await validateOrReject(createOngDTO);

      const project = await this.updateProjectByIdUseCase.execute(
        request.params.id,
        createOngDTO,
      );

      return response
        .status(200)
        .json({ message: 'Projeto editado com sucesso!' });
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
