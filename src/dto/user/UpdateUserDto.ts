import {
    IsBoolean,
    IsOptional,
    IsString,
    Length,
    Matches,
  } from "class-validator";
  
  import { Validators } from "../../config";
  
  export class UpdateUserDto {
    @IsOptional()
    @Matches(Validators.email, { message: "The email format is invalid." })
    email?: string;
  
    @IsOptional()
    @IsString()
    @Length(8, 100, {
      message: "The password must be between 8 and 100 characters long.",
    })
    password?: string;
  
    @IsOptional()
    @IsString()
    @Length(3, 50, {
      message: "The name must be between 3 and 50 characters long.",
    })
    name?: string;
  
    @IsOptional()
    @IsBoolean()
    status?: boolean;
  
    @IsOptional()
    @IsBoolean()
    isVerified?: boolean;
  }
  