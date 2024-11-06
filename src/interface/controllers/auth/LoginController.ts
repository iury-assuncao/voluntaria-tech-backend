import { Response, Request } from 'express';
import { MongoUserRepository } from '../../../infrastructure/repositories/MongoUserRepository';
import { BcryptCryptography } from '../../../infrastructure/security/cryptoHelper';
import { LoginUserUseCase } from '../../../use-cases/auth/LoginUserUseCase';
import { JwtToken } from '../../../infrastructure/security/JwtToken';

const userRepository = new MongoUserRepository();
const crypto = new BcryptCryptography();
const jwt = new JwtToken();

export class LoginController {
  constructor() {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password, userType } = request.body;

      const loginUserUseCase = new LoginUserUseCase(
        userRepository,
        crypto,
        jwt,
      );

      const user = await loginUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
