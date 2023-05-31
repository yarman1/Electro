import {
    IsArray,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsString,
    IsUUID,
} from "class-validator";
import {Type} from "class-transformer";

class SpecsDto {
    @IsUUID()
    public advertisement_id: string;

    @IsNumber()
    public specifications_id: string;

    @IsNotEmpty()
    @IsString()
    public value: string;
}
export class SpecsArrayDto {
    @IsArray()
    @IsNotEmptyObject()
    @IsObject({each: true})
    @Type(() => SpecsDto)
    public specsArray: SpecsDto[];
}
