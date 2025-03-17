import { IsInt, IsOptional, IsString, Length, Min } from "class-validator";

export class UpdateProductDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  code?: number;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  quantity?: number;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  image?: string;
}
