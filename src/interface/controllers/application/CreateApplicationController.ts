import { Request, Response } from 'express';
import { CreateApplicationDTO } from '../../dtos';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { formatValidationErrors } from '../../utils/ValidationErrorUtil';
import { AuthenticatedRequest } from '../../types/AuthenticatedRequest';
import { CreateApplicationUseCase } from '../../../use-cases/application';

export class CreateApplicationController {
  constructor(
    private readonly createApplicationUseCase: CreateApplicationUseCase,
  ) {}

  public async handle(
    request: AuthenticatedRequest,
    response: Response,
  ): Promise<any> {
    try {
      const creteApplicationDto = plainToClass(
        CreateApplicationDTO,
        request.body,
      );

      await validateOrReject(creteApplicationDto);
      const application =
        await this.createApplicationUseCase.execute(creteApplicationDto);
      return response.status(201).json(application);
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
