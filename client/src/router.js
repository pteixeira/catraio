import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = createBrowserHistory();

// Top-level components
import App from "./components/app";
import Home from "./components/home";
import Contact from "./components/contact";
import Photos from "./components/photos";
import Beers from "./components/beers";
import Events from "./components/events";

const router = (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/photos" component={Photos} />
      <Route path="/beers" component={Beers} />
      <Route path="/events" component={Events} />
    </Route>
  </Router>
);

export default router;
