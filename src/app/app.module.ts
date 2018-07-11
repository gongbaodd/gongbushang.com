import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { StaticModule } from '../staticAdapter';
import { GraphQLModule } from '@nestjs/graphql';
import schema from '../apis';
import { NODE_ENVS } from '../environments';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { NuxtModule } from '../nuxtAdapter';

const isDev = process.env.NODE_ENV !== NODE_ENVS.production;
const graphiql = '/graphiql';
const graphql = '/graphql';

@Module({
  imports: [StaticModule, GraphQLModule, NuxtModule],
})
export class AppModule implements NestModule {
  graphiql(customer: MiddlewareConsumer) {
    if (!isDev) return;
    customer
      .apply(graphiqlExpress({ endpointURL: graphql }))
      .forRoutes(graphiql);
  }
  graphql(customer: MiddlewareConsumer) {
    customer
      .apply(
        graphqlExpress(req => ({
          schema,
          rootValue: req,
          context: { auth: req && req.header('authorization') },
        })),
      )
      .forRoutes(graphql);
  }
  configure(customer: MiddlewareConsumer) {
    this.graphiql(customer);
    this.graphql(customer);
  }
}
