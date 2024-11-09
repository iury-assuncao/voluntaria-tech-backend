import { Cryptography } from '../../domain/interfaces/Cryptography';
import { UserRepository } from '../../domain/interfaces/UserRepository';
import { Jwtoken } from '../../domain/interfaces/Jwt';

export class LoginUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptography: Cryptography,
    private readonly jwt: Jwtoken,
  ) {}

  async execute(data: {
    email: string;
    password: string;
  }): Promise<{ token: string; userType: string } | null> {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) throw new Error('E-mail e/ou senha inválido!');

    const passwordMatch = await this.cryptography.compare(
      data.password,
      user.password,
    );
    if (!passwordMatch) throw new Error('E-mail e/ou senha inválido!');

    const token = this.jwt.generateToken({
      userId: user.id,
      userEmai: user.email,
      userType: user.userType,
    });
    return { token, userType: user.userType };
  }
}
