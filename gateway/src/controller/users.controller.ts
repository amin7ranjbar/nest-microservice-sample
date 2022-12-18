import { Controller, Get } from '@nestjs/common';
import { Jaeger } from 'nest-jaeger-tracing';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getHello(@Jaeger() jaeger) {
    return await this.userService.getHello({ jaeger });
  }
}
