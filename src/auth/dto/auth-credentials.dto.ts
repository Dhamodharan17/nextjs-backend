import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {

  @IsString()
  @MinLength(4)
  @MaxLength(20)  
  username: string;

  @IsString()
  @MaxLength(32)
  @MinLength(8)
  //@Matches(/(?=.&\d),{message : 'password is too weak'}) -
  //for regular expersssion - https://gist.github.com/arielweinberger/18a29bfa17072444d45adaeeb8e92ddc
  password: string;
}
