import { Module } from "@nestjs/common";
import { RmqModule } from "nest-rabbitmq";
import { AppController } from "../controller/app.controller";
import { AppService } from "../service/app.service";
@Module({
  imports:[
   RmqModule.register({
    uri : 'amqp://guest:guest@rabbitmq:5672'
   })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
