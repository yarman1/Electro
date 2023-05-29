import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import {JwtAuthGuard} from "../auth/jwt.guard";
import {AdvertsDto} from "./dto/adverts.dto";

@Controller('adverts')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  postNewAdvertisement(@Body() dto: AdvertsDto, @Req() req) {
    return this.advertsService.postNewAdvertisement(dto, req);
  }
}

