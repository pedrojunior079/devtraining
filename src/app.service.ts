import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Mundo! Bem vindo ao NestJS';
  }
}
