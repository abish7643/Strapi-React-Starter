import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>404</h1>
          <h4>Oh Man, I don't know where it is!</h4>
          <button>
            <Link to={`/`} className="uk-link-reset">
              Go to Home Page
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
