import {
  IsString,
  IsArray,
  IsOptional,
  IsNotEmpty,
  IsMongoId,
  Length,
  Validate,
} from 'class-validator';
import { cnpj } from 'cpf-cnpj-validator';

export class CreateOngDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name!: string;

  @IsNotEmpty({ message: 'O CNPJ é obrigatório.' })
  @Length(18, 18, { message: 'O CNPJ deve conter 18 dígitos.' })
  @Validate((value: string) => cnpj.isValid(value), {
    message: 'CNPJ inválido.',
  })
  cnpj!: string;

  @IsString()
  @IsNotEmpty({ message: 'A missão é obrigatória' })
  mission!: string;

  @IsString()
  @IsNotEmpty({ message: 'O link da imagem é obrigatório' })
  linkImg!: string;

  @IsOptional()
  @IsArray({ message: 'Projects deve ser um array' })
  @IsMongoId({
    each: true,
    message: 'Cada item em projects deve ser um ID válido',
  })
  projects!: string[];

  @IsOptional()
  @IsMongoId({ message: 'O userId deve ser um ID válido' })
  userId?: string;

  @IsOptional()
  @IsMongoId({ message: 'O id deve ser um ID válido' })
  id?: string;
}
