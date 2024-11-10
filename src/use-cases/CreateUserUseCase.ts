import { User } from '../domain/entities';
import { Cryptography } from '../domain/interfaces/Cryptography';
import { UserRepository } from '../domain/interfaces/UserRepository';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptography: Cryptography,
  ) {}

  async execute({ email, password, userType }: User) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('Usuário já cadastrado com esse e-mail!');
    }

    const hashedPassword = await this.cryptography.hash(password);

    return await this.userRepository.create({
      email,
      password: hashedPassword,
      userType,
    });
  }
}
