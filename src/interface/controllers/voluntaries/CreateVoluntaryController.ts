import { Response, Request } from 'express';
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateVoluntaryDTO } from '../../dtos/CreateVoluntaryDto';
import { CreateVoluntaryUseCase } from '../../../use-cases/voluntary/CreateVoluntaryUseCase';
import { MongoVoluntaryRepository } from '../../../infrastructure/repositories/MongoVoluntaryRepository';

const voluntaryRepository = new MongoVoluntaryRepository();

class CreateVoluntaryController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const createVoluntaryDTO = plainToClass(CreateVoluntaryDTO, request.body);

      await validateOrReject(createVoluntaryDTO);

      const createVoluntaryUseCase = new CreateVoluntaryUseCase(
        voluntaryRepository,
      );

      const user = await createVoluntaryUseCase.execute(createVoluntaryDTO);

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json(error);
    }
  }
}

export { CreateVoluntaryController };
