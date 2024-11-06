import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { MongoUserRepository } from '../../../infrastructure/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../../infrastructure/security/cryptoHelper';

const userRepository = new MongoUserRepository();
const crypto = new BcryptCryptography();

class CreateUserController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { email, password, userType } = request.body;

      const createUserUseCase = new CreateUserUseCase(userRepository, crypto);

      const user = await createUserUseCase.execute({
        email,
        password,
        userType,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };
