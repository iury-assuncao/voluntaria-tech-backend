import { Request, Response } from 'express';
import { UpdateVoluntaryByIdUseCase } from '../../../use-cases/voluntary';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { CreateVoluntaryDTO } from '../../dtos';

export class UpdateVoluntaryByIdController {
  constructor(
    private readonly updateVoluntaryByIdUseCase: UpdateVoluntaryByIdUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const createVoluntaryDTO = plainToClass(CreateVoluntaryDTO, request.body);
      await validateOrReject(createVoluntaryDTO);

      const voluntary = await this.updateVoluntaryByIdUseCase.execute(
        request.params.id,
        createVoluntaryDTO,
      );

      return response
        .status(200)
        .json({ message: 'Voluntário editado com sucesso!' });
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
