import { Module, Provider } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { HTTP_SERVER_REF } from '@nestjs/core';
import * as config from '../nuxt.config';
import { Nuxt, Builder } from 'nuxt-edge';
import { NODE_ENVS, DEV_MODE } from '../environments';
import * as Express from 'express';
import { Request, Response, NextFunction } from 'express';
import { resolve } from 'path';
import * as URL from 'url';
import * as FSE from 'fs-extra';

const isPrd = process.env.NODE_ENV === NODE_ENVS.production;
const isServ = process.env.DEV_MODE === DEV_MODE.server;
// tslint:disable:all
const NuxtProvider: Provider = {
  provide: 'Nuxt',
  async useFactory(app: ExpressAdapter) {
    if (isPrd) {
      app.use('/_nuxt', Express.static(resolve(__dirname, '../../dist/_nuxt')));
      app.use(async (req: Request, res: Response, next: NextFunction) => {
        const { pathname } = URL.parse(req.url);
        try {
          const filePath = resolve(
            __dirname,
            `../../dist${pathname}/index.html`,
          );
          const content = await FSE.readFile(filePath, 'utf-8');
          res.end(content);
        } catch (err) {
          const { code } = err;
          if (code !== 'ENOENT') {
            //  tslint:disable:no-console
            console.log(err);
          }
          next();
        }
      });
    } else {
      if (isServ) {
        return;
      }
      const nuxt = await new Nuxt(config);
      new Builder(nuxt).build();
      app.use((req, res, next) => {
        if (
          req.url.indexOf('/graphql') > -1 ||
          req.url.indexOf('/graphiql') > -1
        ) {
          return next();
        }
        nuxt.render(req, res);
      });
    }
  },
  inject: [HTTP_SERVER_REF],
};

@Module({
  providers: [NuxtProvider],
})
export class NuxtModule {}
