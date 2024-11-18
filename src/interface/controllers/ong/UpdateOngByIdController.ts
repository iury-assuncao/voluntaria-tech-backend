import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { CreateOngDTO } from '../../dtos';
import { UpdateOngByIdUseCase } from '../../../use-cases/ong';

export class UpdateOngByIdController {
  constructor(private readonly updateOngByIdUseCase: UpdateOngByIdUseCase) {}

  public async handle(request: Request, response: Response): Promise<any> {
    try {
      const createOngDTO = plainToClass(CreateOngDTO, request.body);
      await validateOrReject(createOngDTO);

      const Ong = await this.updateOngByIdUseCase.execute(
        request.params.id,
        createOngDTO,
      );

      return response.status(200).json({ message: 'Ong editada com sucesso!' });
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
