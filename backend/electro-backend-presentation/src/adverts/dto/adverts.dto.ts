import {IsInt, IsNotEmpty, IsString, Length} from "class-validator";

export class AdvertsDto {
    @IsInt()
    public category_id: number;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255, {
        message:"Title has to be at between 1 and 255"
    })
    public title: string;

    public description: string;

    public price: number;
}
