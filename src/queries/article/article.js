import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    articles(where: { id: $id }, publicationState: LIVE, limit: 1) {
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
`;

export default ARTICLE_QUERY;
