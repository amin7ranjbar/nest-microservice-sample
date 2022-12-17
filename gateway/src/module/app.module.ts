import { Module } from '@nestjs/common';
import { RmqModule, RmqService } from 'nest-rabbitmq';
import { UsersModule } from './users.module';

@Module({
  imports: [
    RmqModule.register({
      uri: 'amqp://guest:guest@rabbitmq:5672',
    }),
    UsersModule,
  ],
})
export class AppModule {}
