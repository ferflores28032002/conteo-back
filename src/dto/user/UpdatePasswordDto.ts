import { IsString, Length } from "class-validator";

export class UpdatePasswordDto {
  @IsString()
  token!: string;

  @IsString()
  @Length(6, 50, { message: "Password must be between 6 and 50 characters" })
  newPassword!: string;
}
