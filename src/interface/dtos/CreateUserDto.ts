import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email!: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  @Length(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres.' })
  password!: string;

  @IsNotEmpty({ message: 'O tipo de usuário é obrigatório.' })
  userType!: string;
}
