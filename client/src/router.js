import React from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = createBrowserHistory();

// Top-level components
import App from "./components/app";
import Home from "./components/home";
import Photos from "./components/photos";
import Beers from "./components/beers";
import Events from "./components/events";
import Disclaimer from "./components/disclaimer";
import About from "./components/about";

const router = (
  <Router history={history}>
    <Route path="/disclaimer" component={Disclaimer} />
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/photos" component={Photos} />
      <Route path="/beers" component={Beers} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default router;
