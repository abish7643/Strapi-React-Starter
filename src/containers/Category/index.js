import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  let { slug } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={slug}>
      {({ data: { categories } }) => {
        // console.log(categories);
        const category = categories[0];
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Articles articles={category.articles} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;
