import { Controller } from '@nestjs/common';
import { AdvertsService } from './adverts.service';

@Controller('adverts')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {}
}
