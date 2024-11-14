import { IsString, IsOptional, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateApplicationDTO {
  @IsString({ message: 'A descrição da candidatura deve ser uma string.' })
  @IsNotEmpty({ message: 'A descrição da candidatura é obrigatório' })
  description?: string;

  @IsString({
    message: 'A disponibilidade da candidatura deve ser uma string.',
  })
  @IsNotEmpty({ message: 'A disponibilidade da candidatura é obrigatório' })
  availability?: string;

  @IsOptional()
  @IsString({ message: 'O status da candidatura deve ser uma string.' })
  status?: string;

  @IsNotEmpty({ message: 'O projectId é obrigatório' })
  @IsMongoId({ message: 'O projectId deve ser um ID válido' })
  projectId!: string;

  @IsNotEmpty({ message: 'O voluntaryId é obrigatório' })
  @IsMongoId({ message: 'O voluntaryId deve ser um ID válido' })
  voluntaryId!: string;
}
