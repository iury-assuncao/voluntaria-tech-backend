import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { MongoUserRepository } from '../../../infrastructure/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../../infrastructure/security/crypto';
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateUserDTO } from '../../dtos';

const userRepository = new MongoUserRepository();
const crypto = new BcryptCryptography();

class CreateUserController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const createUserDTO = plainToClass(CreateUserDTO, request.body);

      await validateOrReject(createUserDTO);

      const createUserUseCase = new CreateUserUseCase(userRepository, crypto);

      const user = await createUserUseCase.execute(createUserDTO);

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json(error);
    }
  }
}

export { CreateUserController };
