import gql from "graphql-tag";

export const query = gql`
  query sortItem($category: Category!) {
    sortItem(category: $category) {
      _id
      name
      url
      img
    }
  }
`;
