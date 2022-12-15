import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async getHello() {
    return await this.userServiceClient.send<any>('hello_world', {
      message: 'Hello World',
    });
  }
}
