import { Request, Response } from 'express';
import { CreateProjectUseCase } from '../../../use-cases/project/CreateProjectUseCase';
import { CreateProjectDTO } from '../../dtos';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { formatValidationErrors } from '../../utils/ValidationErrorUtil';
import { AuthenticatedRequest } from '../../types/AuthenticatedRequest';
import { UpdateOngByIdUseCase } from '../../../use-cases/ong';

export class CreateProjectController {
  constructor(
    private readonly createProjectUseCase: CreateProjectUseCase,
    private readonly updateOngByIdUseCase: UpdateOngByIdUseCase,
  ) {}

  public async handle(
    request: AuthenticatedRequest,
    response: Response,
  ): Promise<any> {
    try {
      const createProjectDto = plainToClass(CreateProjectDTO, request.body);

      await validateOrReject(createProjectDto);
      const project = await this.createProjectUseCase.execute(createProjectDto);
      if (project._id && project.ongId) {
        await this.updateOngByIdUseCase.execute(project.ongId, {
          $addToSet: { projects: project._id },
        });
      }
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
