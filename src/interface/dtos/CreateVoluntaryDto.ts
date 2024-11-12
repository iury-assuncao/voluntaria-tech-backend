import {
  IsString,
  IsArray,
  IsOptional,
  IsNotEmpty,
  IsMongoId,
  Length,
  Validate,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export class CreateVoluntaryDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name!: string;

  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @Length(14, 14, { message: 'O CPF deve conter 14 dígitos.' })
  @Validate((value: string) => cpf.isValid(value), {
    message: 'CPF inválido.',
  })
  cpf!: string;

  @IsString()
  @IsNotEmpty({ message: 'As habilidades são obrigatórias' })
  skills!: string;

  @IsString()
  @IsNotEmpty({ message: 'A disponibilidade é obrigatória' })
  availability!: string;

  @IsString()
  @IsNotEmpty({ message: 'O link da imagem é obrigatório' })
  linkImg!: string;

  @IsOptional()
  @IsArray({ message: 'Applications deve ser um array' })
  @IsMongoId({
    each: true,
    message: 'Cada item em applications deve ser um ID válido',
  })
  applications!: string[];

  @IsString()
  @IsNotEmpty({ message: 'As preferências são obrigatórias' })
  preferences!: string;

  @IsOptional()
  @IsNotEmpty({ message: 'O userId é obrigatório' })
  @IsMongoId({ message: 'O userId deve ser um ID válido' })
  userId?: string;
}
