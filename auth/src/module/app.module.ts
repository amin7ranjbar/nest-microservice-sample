import { Module } from "@nestjs/common";
import { JaegerModule } from "nest-jaeger-tracing";
import { RmqModule } from "nest-rabbitmq";
import { AppService } from "../service/app.service";
@Module({
  imports:[
   RmqModule.register({
    uri : 'amqp://guest:guest@rabbitmq:5672'
   }),
   JaegerModule.register({
    serviceName: "auth",
    agentHost: 'jaeger'
   })
  ],
  providers: [AppService],
})
export class AppModule {}
