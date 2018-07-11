import { Module, Provider } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { HTTP_SERVER_REF } from '@nestjs/core';
import * as Express from 'express';
import { resolve } from 'path';

const StaticProvider: Provider = {
  provide: 'Static',
  useFactory(app: ExpressAdapter) {
    app.use('/static', Express.static(resolve(__dirname, '../../public')));
  },
  inject: [HTTP_SERVER_REF],
};

@Module({
  providers: [StaticProvider],
})
export class StaticModule {}
