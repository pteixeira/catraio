import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = createBrowserHistory();

// Top-level components
import App from "./components/app";
import Home from "./components/home";
import Contact from "./components/contact";
import Photos from "./components/photos";

const router = (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

export default router;
