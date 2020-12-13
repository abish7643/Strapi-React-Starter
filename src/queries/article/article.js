import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    articles(where: { id: $id }, limit: 1, publicationState: LIVE) {
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
