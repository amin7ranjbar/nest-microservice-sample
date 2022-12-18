import { Module } from '@nestjs/common';
import { JaegerModule } from 'nest-jaeger-tracing';
import { RmqModule } from 'nest-rabbitmq';
import { UsersModule } from './users.module';

@Module({
  imports: [
    RmqModule.register({
      uri: 'amqp://guest:guest@rabbitmq:5672',
    }),
    JaegerModule.register({
      serviceName: 'gateway',
      agentHost: 'jaeger',
    }),
    UsersModule,
  ],
})
export class AppModule {}
