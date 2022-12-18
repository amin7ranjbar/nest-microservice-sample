import { HttpException, Injectable } from "@nestjs/common";
import { Rpc } from "nest-rabbitmq";

@Injectable()
export class AppService {
  @Rpc({ routingKey: "user.messages" })
  getHello(body: any): string {
    const random = Math.floor(
      Math.random() * (10)
    )
    if (random % 2 == 0) {
      return `message from auth-service : ${body.message}`;
    }
    throw new HttpException("error" , 400);
  }
}
