import {
  IsString,
  IsArray,
  IsOptional,
  IsNotEmpty,
  IsMongoId,
} from 'class-validator';

export class CreateVoluntaryDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'O CPF é obrigatório' })
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

  @IsArray({ message: 'Applications deve ser um array' })
  @IsMongoId({
    each: true,
    message: 'Cada item em applications deve ser um ID válido',
  })
  applications!: string[];

  @IsString()
  @IsNotEmpty({ message: 'As preferências são obrigatórias' })
  preferences!: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo createdBy é obrigatório' })
  createdBy!: string;

  @IsOptional()
  @IsMongoId({ message: 'O userId deve ser um ID válido' })
  userId?: string;

  @IsOptional()
  @IsMongoId({ message: 'O id deve ser um ID válido' })
  id?: string;
}
