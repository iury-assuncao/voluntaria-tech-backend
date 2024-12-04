import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { CreateVoluntaryUseCase } from '../../../use-cases/voluntary/CreateVoluntaryUseCase';
import { validateOrReject, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateVoluntaryDTO, CreateUserDTO, CreateOngDTO } from '../../dtos';
import { CreateOngUseCase } from '../../../use-cases/ong/CreateOngUseCase';
import { UserTypeEnum } from '../../../domain/enums';

class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly createVoluntaryUseCase: CreateVoluntaryUseCase,
    private readonly createOngUseCase: CreateOngUseCase,
  ) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const createUserDTO = plainToClass(CreateUserDTO, request.body);

      await validateOrReject(createUserDTO);

      if (createUserDTO.userType === UserTypeEnum.VOLUNTARY) {
        const createVoluntaryDTO = plainToClass(
          CreateVoluntaryDTO,
          request.body,
        );
        await validateOrReject(createVoluntaryDTO);

        const user = await this.createUserUseCase.execute(createUserDTO);
        createVoluntaryDTO.userId = user._id;

        const voluntary =
          await this.createVoluntaryUseCase.execute(createVoluntaryDTO);
        return response.status(201).json({ user, voluntary });
      }

      if (createUserDTO.userType === UserTypeEnum.ONG) {
        const createOngDTO = plainToClass(CreateOngDTO, request.body);
        await validateOrReject(createOngDTO);

        const user = await this.createUserUseCase.execute(createUserDTO);
        createOngDTO.userId = user._id;

        const ong = await this.createOngUseCase.execute(createOngDTO);
        return response.status(201).json({ user, ong });
      }

      return response
        .status(400)
        .json({ message: 'Tipo de usuário inválido.' });
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

export { CreateUserController };
