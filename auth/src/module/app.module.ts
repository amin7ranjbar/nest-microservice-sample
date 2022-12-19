import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JaegerModule } from "nest-jaeger-tracing";
import { RmqModule } from "nest-rabbitmq";
import { AppService } from "../service/app.service";
@Module({
  imports:[
   ConfigModule.forRoot(),
   RmqModule.register({
    uri: process.env.RABBITMQ_URL,
  }),
  JaegerModule.register({
    serviceName: process.env.npm_package_name,
    agentHost: process.env.JAEGER_AGENT_HOST,
  }),
  ],
  providers: [AppService],
})
export class AppModule {}
