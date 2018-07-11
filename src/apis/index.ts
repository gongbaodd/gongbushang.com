import { makeExecutableSchema } from 'graphql-tools';
import { LoginDefs, LoginResolver } from './login';
import { ItemDefs, ItemResover } from './item';
import gql from 'graphql-tag';
import * as merge from 'lodash/merge';

const TestDefs = gql`
  type Query {
    hi: String
  }
`;
const TestResolver = {
  Query: {
    hi() {
      merge;
      return 'hello';
    },
  },
};

const typeDefs = [TestDefs, LoginDefs, ItemDefs];
const resolvers = merge([TestResolver, LoginResolver, ItemResover]);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
