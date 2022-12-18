import { Module } from '@nestjs/common';
import { RmqService } from 'nest-rabbitmq';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RmqService],
})
export class UsersModule {}
