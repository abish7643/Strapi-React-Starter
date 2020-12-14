import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(
      publicationState: LIVE
      sort: "id:desc"
      where: { status: "published" }
    ) {
      id
      title
      slug
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
