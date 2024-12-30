import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// esto es como luce la información que recibo
export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()

  ///2) Hacerlo opcional puede venir como puede que no y no hay problema
  @IsOptional()
  description?: string;

  @IsNumber()
  ///1) Intenta trasformarlo y si no puede salta la validación
  @Type(() => Number)
  price: number;
}
