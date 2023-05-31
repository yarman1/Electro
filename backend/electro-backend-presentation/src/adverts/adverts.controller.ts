import {Body, Controller, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import {JwtAuthGuard} from "../auth/jwt.guard";
import {AdvertsDto} from "./dto/adverts.dto";
import {SpecsArrayDto} from "./dto/specifications.dto";

@Controller('adverts')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  postNewAdvertisement(@Body() dto: AdvertsDto, @Req() req) {
    return this.advertsService.postNewAdvertisement(dto, req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('categories')
  getCategories() {
    return this.advertsService.getCategories();
  }

  @UseGuards(JwtAuthGuard)
  @Get('specifications/:id')
  getCategorySpecifications(@Param() params: {id: string}) {
    return this.advertsService.getSpecifications(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('specifications')
  postSpecifications(@Body() dto: SpecsArrayDto) {
    return this.advertsService.postSpecifications(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  getAdvertisements(){
    return this.advertsService.getAllAdvertisements();
  }
}

