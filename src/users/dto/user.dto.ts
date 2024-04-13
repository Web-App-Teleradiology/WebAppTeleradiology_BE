import { Role } from "src/auth/enums/enum";
import {
  IsEmail,
  IsEnum,
  IsLowercase,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  IsBoolean,
} from "class-validator";
export class userDto {
  @IsString()
  @IsOptional()
  readonly id: string;
  @IsString()
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  @IsEmail()
  @IsLowercase()
  readonly email: string;

  constructor(email:string){
    this.email= email;
  }
  @IsString()
  @MinLength(8)
  //Regex to check if password have at least one digit,
  //one lowercase letter, one uppercase letter, and one special character
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/, {
    message: " Password too weak, ",
  })
  readonly password: string;
  @IsString()
  @IsEnum(Role, {
    message: "Invalid role value. Please select a valid role.",
  })
  readonly role: Role;
  @IsBoolean()
  readonly isActive: boolean;
}
