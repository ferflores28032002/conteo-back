import { IsInt, IsString, Length, Min } from "class-validator";

export class CreateProductDto {
  @IsInt()
  @Min(1)
  code!: number;

  @IsString()
  @Length(3, 100)
  name!: string;

  @IsString()
  @Length(0, 500)
  description!: string;

  @IsInt()
  @Min(0)
  quantity!: number;
}
