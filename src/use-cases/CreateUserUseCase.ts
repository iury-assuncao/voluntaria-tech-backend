import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/interfaces/UserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password, userType }: User) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('Usuário já cadastrado com esse e-mail!');
    }
    return await this.userRepository.create({
      email,
      password,
      userType,
    });
  }
}
