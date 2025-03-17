import {
  IsBoolean,
  IsOptional,
  IsString,
  Length,
  Matches,
} from "class-validator";

import { Validators } from "../../config";

export class CreateUserDto {
  @Matches(Validators.email, { message: "The email format is invalid." })
  email!: string;

  @IsString()
  @Length(8, 100, {
    message: "The password must be between 8 and 100 characters long.",
  })
  password!: string;

  @IsString()
  @Length(3, 50, {
    message: "The name must be between 3 and 50 characters long.",
  })
  name!: string;

  @IsBoolean()
  @IsOptional()
  status!: boolean;

  @IsBoolean()
  @IsOptional()
  isVerified?: boolean;
}
