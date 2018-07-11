import gql from 'graphql-tag';
import * as md5 from 'md5';

export const LoginDefs = gql`
  type Mutation {
    login(password: String!): String
  }
`;

export const PASSWD = process.env.PASSWD || 'test';

export const LoginResolver = {
  Mutation: {
    login(obj, { password }) {
      if (password !== PASSWD) throw new Error('not authorized');
      return md5(password);
    },
  },
};
