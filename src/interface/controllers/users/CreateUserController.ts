import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { CreateVoluntaryUseCase } from '../../../use-cases/voluntary/CreateVoluntaryUseCase';
import { MongoUserRepository } from '../../../infrastructure/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../../infrastructure/security/crypto';
import { validateOrReject, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateVoluntaryDTO, CreateUserDTO, CreateOngDTO } from '../../dtos';
import { MongoVoluntaryRepository } from '../../../infrastructure/repositories/MongoVoluntaryRepository';
import { MongoOngRepository } from '../../../infrastructure/repositories/MongoOngRepository';
import { CreateOngUseCase } from '../../../use-cases/ong/CreateOngUseCase';
import { UserTypeEnum } from '../../../domain/enums/UserTypeEnum';
import { error } from 'console';

const userRepository = new MongoUserRepository();
const voluntaryRepository = new MongoVoluntaryRepository();
const ongRepository = new MongoOngRepository();
const crypto = new BcryptCryptography();

class CreateUserController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const createUserDTO = plainToClass(CreateUserDTO, request.body);

      await validateOrReject(createUserDTO);

      const createUserUseCase = new CreateUserUseCase(userRepository, crypto);

      if (createUserDTO.userType === UserTypeEnum.VOLUNTARY) {
        const createVoluntaryDTO = plainToClass(
          CreateVoluntaryDTO,
          request.body,
        );
        await validateOrReject(createVoluntaryDTO);

        const createVoluntaryUseCase = new CreateVoluntaryUseCase(
          voluntaryRepository,
        );
        const user = await createUserUseCase.execute(createUserDTO);
        console.log('user', user);
        createVoluntaryDTO.userId = user.id;

        const voluntary =
          await createVoluntaryUseCase.execute(createVoluntaryDTO);
        return response.status(201).json({ user, voluntary });
      }

      if (createUserDTO.userType === UserTypeEnum.ONG) {
        const createOngDTO = plainToClass(CreateOngDTO, request.body);
        await validateOrReject(createOngDTO);

        const createOngUseCase = new CreateOngUseCase(ongRepository);
        const user = await createUserUseCase.execute(createUserDTO);
        createOngDTO.userId = user.id;
        const ong = await createOngUseCase.execute(createOngDTO);
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
