import { Response, Request } from 'express';
import { LoginUserUseCase } from '../../../use-cases/auth/LoginUserUseCase';

export class LoginController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { email, password } = request.body;

      const user = await this.loginUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
