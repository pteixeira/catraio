import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = createBrowserHistory();

// Top-level components
import App from "./components/app";
import Header from "./components/header";

const router = (
  <Router history={history}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);

export default router;
