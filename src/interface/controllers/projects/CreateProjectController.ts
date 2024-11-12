import { Request, Response } from 'express';
import { CreateProjectUseCase } from '../../../use-cases/project/CreateProjectUseCase';
import { CreateProjectDTO } from '../../dtos';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { formatValidationErrors } from '../../utils/ValidationErrorUtil';
import { AuthenticatedRequest } from '../../types/AuthenticatedRequest';

export class CreateProjectController {
  constructor(private readonly createProjectUseCase: CreateProjectUseCase) {}

  public async handle(
    request: AuthenticatedRequest,
    response: Response,
  ): Promise<any> {
    try {
      const createProjectDto = plainToClass(CreateProjectDTO, request.body);

      await validateOrReject(createProjectDto);
      createProjectDto.ongId = request.user?.id;
      const project = await this.createProjectUseCase.execute(createProjectDto);
      return response.status(201).json(project);
    } catch (error: any) {
      if (
        Array.isArray(error) &&
        error.every((e) => e instanceof ValidationError)
      ) {
        const formattedErrors = formatValidationErrors(error);
        return response.status(400).json(formattedErrors);
      }

      console.error(error);
      return response.status(400).json({ message: error.message });
    }
  }
}
