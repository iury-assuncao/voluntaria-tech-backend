import { IsString, IsArray, IsOptional, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateOngDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'O CNPJ é obrigatório' })
  cnpj!: string;

  @IsString()
  @IsNotEmpty({ message: 'A missão é obrigatória' })
  mission!: string;

  @IsString()
  @IsNotEmpty({ message: 'O link da imagem é obrigatório' })
  linkImg!: string;

  @IsArray({ message: 'Projects deve ser um array' })
  @IsMongoId({ each: true, message: 'Cada item em projects deve ser um ID válido' })
  projects!: string[];

  @IsString()
  @IsNotEmpty({ message: 'O campo createdBy é obrigatório' })
  createdBy: string | undefined;

  @IsOptional()
  @IsMongoId({ message: 'O userId deve ser um ID válido' })
  userId?: string;

  @IsOptional()
  @IsMongoId({ message: 'O id deve ser um ID válido' })
  id?: string;
}
