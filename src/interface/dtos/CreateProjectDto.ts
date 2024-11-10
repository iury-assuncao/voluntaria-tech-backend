import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateProjectDTO {
  @IsNotEmpty({ message: 'O nome do projeto é obrigatório.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  name!: string;

  @IsNotEmpty({ message: 'A descrição do projeto é obrigatória.' })
  @IsString({ message: 'A descrição deve ser uma string.' })
  description!: string;

  @IsNotEmpty({})
  @IsUrl({}, { message: 'O link da comunidade deve ser uma URL válida.' })
  communityLink!: string;

  @IsNotEmpty({ message: 'Os voluntários são obrigatórios.' })
  @IsString({ message: 'Os voluntários devem ser uma string.' })
  volunteers!: string;

  @IsNotEmpty({ message: 'A data de entrega é obrigatória.' })
  @IsDate({ message: 'A data de entrega deve ser uma data válida.' })
  DeliveryDate!: Date;

  @IsOptional()
  @IsString({ message: 'O ID da ONG deve ser uma string.' })
  ongId!: string;
}
