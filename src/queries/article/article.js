import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: String) {
    articles(
      where: { slug: $id, status: "published" }
      publicationState: LIVE
      limit: 1
    ) {
      id
      title
      slug
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
