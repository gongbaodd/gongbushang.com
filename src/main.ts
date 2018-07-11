import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import * as morgan from 'morgan';
import * as gzip from 'compression';
import { NODE_ENVS } from 'environments';

const isDev = process.env.NODE_ENV !== NODE_ENVS.production;

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  app.use(morgan(isDev ? 'dev' : 'combined'));
  app.use(gzip());
  await app.listen(process.env.PORT || 3000);
  // tslint:disable-next-line:no-console
  console.info('server running in 3000 in ' + process.env.NODE_ENV + ' mode');
}
