import {IsInt, IsNotEmpty, IsNumber, IsString, Length} from "class-validator";

export class AdvertsDto {
    @IsInt()
    public category_id: number;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255, {
        message:"Title has to be at between 1 and 255"
    })
    public title: string;

    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsNotEmpty()
    @IsNumber()
    public price: number;

    @IsNotEmpty()
    @IsString()
    public address: string;
}
