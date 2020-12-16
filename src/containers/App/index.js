import React from "react";

import {
  Switch,
  Route,
  HashRouter as Router,
  Redirect,
} from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import NotFoundPage from "../NotFoundPage/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/article/:slug" component={Article} exact />
          <Route path="/category/:slug" component={Category} exact />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
