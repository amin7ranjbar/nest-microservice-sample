import { Module } from '@nestjs/common';
import { RmqModule, RmqService } from 'nest-rabbitmq';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';

@Module({
  imports: [
    RmqModule.register({
      uri: 'amqp://guest:guest@rabbitmq:5672',
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, RmqService],
})
export class UsersModule {}
