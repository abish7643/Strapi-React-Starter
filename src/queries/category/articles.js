import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    categories(where: { id: $id }, publicationState: LIVE, limit: 1) {
      id
      name
      articles(sort: "id:desc") {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
