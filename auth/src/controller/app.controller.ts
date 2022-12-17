import { Controller, Get } from '@nestjs/common';
import { Rpc } from 'nest-rabbitmq';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Rpc({ routingKey: "user.messages"})
  async getHello(data: any): Promise<string> {
    return this.appService.getHello(data.message);
  }
}
