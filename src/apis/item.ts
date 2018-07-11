import gql from 'graphql-tag';
import { isAuth } from './util';
import { createConnection } from '../db';

export const ItemDefs = gql`
  enum Category {
    code
    map
    note
    canvas
    gym
    extend
    japanese
    english
  }
  type Item {
    _id: String!
    name: String!
    url: String!
    img: String!
    category: Category!
  }
  extend type Mutation {
    addItem(
      name: String!
      url: String!
      img: String!
      category: Category!
    ): Item
  }
  extend type Query {
    sortItem(category: Category!): [Item]
  }
`;

// tslint:disable:all

export const ItemResover = {
  Mutation: {
    async addItem(obj, { name, url, img, category }, { auth }) {
      const data = { name, url, img, category };

      if (!isAuth(auth)) return;

      const item = await new Promise((resolve, reject) =>
        createConnection(async collection => {
          const { ops } = await collection.insert(data);
          resolve(ops[0]);
        }),
      );

      return item;
    },
  },
  Query: {
    async sortItem(obj, { category }, { auth }) {
      const items = new Promise((resolve, reject) => {
        createConnection(async collection => {
          const data = await collection.find({ category }).toArray();
          resolve(data);
        });
      });

      return items;
    },
  },
};
