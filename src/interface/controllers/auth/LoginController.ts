import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { MongoUserRepository } from '../../../infra/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../../infra/helpers/cryptoHelper';
import { LoginUserUseCase } from '../../../use-cases/auth/LoginUserUseCase';
import { Jwt } from '../../../infra/helpers/jwtHelper';
import { CreateUserController } from '../users/CreateUserController';

const userRepository = new MongoUserRepository();
const crypto = new BcryptCryptography();
const jwt = new Jwt();

export class LoginController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password, userType } = request.body;

      const authenticateUserUseCase = new LoginUserUseCase(
        userRepository,
        crypto,
        jwt,
      );

      const user = await authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
