import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: String) {
    categories(where: { slug: $id }, publicationState: LIVE, limit: 1) {
      id
      name
      slug
      articles(sort: "id:desc") {
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
  }
`;

export default CATEGORY_ARTICLES_QUERY;
