import {IsNotEmpty, IsPhoneNumber, IsString, IsUrl, Length} from "class-validator";
import {AuthDto} from "./auth.dto";

export class AuthDtoSignUp extends AuthDto {
    @IsNotEmpty()
    @IsString()
    @Length(2, 50, {message: 'Name length has to be at between 2 and 50 chars'})
    public visual_name: string;

    @IsPhoneNumber("UA", { message: 'Wrong format of phone number' })
    public phone_number: string;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    public profile_picture_link: string;

}
