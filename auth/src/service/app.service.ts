import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(body: string): string {
    return `message from auth-service : ${body}`;
  }
}
