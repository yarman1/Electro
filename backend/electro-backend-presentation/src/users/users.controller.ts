import {Controller, Get, Param, Req, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import {JwtAuthGuard} from "../auth/jwt.guard";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyUser(@Req() req) {
    return this.usersService.getMyUser(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param() params: {id: string}) {
    return this.usersService.getUser(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }
}
