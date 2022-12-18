import { Injectable } from '@nestjs/common';
import { RmqService } from 'nest-rabbitmq';

@Injectable()
export class UsersService {
  constructor(private readonly rmqService: RmqService) {}

  async getHello(payload) {
    payload.message = 'Hello World';
    return await this.rmqService.request({
      routingKey: 'user.messages',
      payload,
    });
  }
}
