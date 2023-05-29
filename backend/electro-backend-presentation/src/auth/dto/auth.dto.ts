import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";

export class AuthDto {
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Length(5, 20, {message: 'Password has to be at between 5 and 20 chars'})
    public password: string;
}
