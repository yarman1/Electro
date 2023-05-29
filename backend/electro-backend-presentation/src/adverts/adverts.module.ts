import { Module } from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { AdvertsController } from './adverts.controller';
import {JwtStrategy} from "../auth/jwt.strategy";

@Module({
  controllers: [AdvertsController],
  providers: [AdvertsService, JwtStrategy]
})
export class AdvertsModule {}
