import { Injectable } from '@nestjs/common';
import { RmqService } from 'nest-rabbitmq';

@Injectable()
export class UsersService {
  constructor(private readonly rmqService: RmqService) {}

  async getHello() {
    return await this.rmqService.request({
      routingKey: 'user.messages',
      payload: {
        message: 'Hello World',
      },
    });
  }
}
