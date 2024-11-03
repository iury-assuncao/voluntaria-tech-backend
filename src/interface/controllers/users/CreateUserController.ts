import { Response, Request } from 'express';
import { CreateUserUseCase } from '../../../use-cases/CreateUserUseCase';
import { MongoUserRepository } from '../../../infra/repositories/MongoUserRepository';

const userRepository = new MongoUserRepository();

class CreateUserController {
  async handle(request: Request, response: Response): Promise<any> {
    const { email, password, userType } = request.body;

    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user = await createUserUseCase.execute({
      email,
      password,
      userType,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
