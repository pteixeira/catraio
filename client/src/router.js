import React from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = createBrowserHistory();

// Top-level components
import App from "app-components/app";
import Home from "app-components/home";
import Disclaimer from "app-components/disclaimer";
// import Photos from "app-components/photos";
// import Beers from "app-components/beers";
// import Events from "app-components/events";
// import About from "app-components/about";

const router = (
  <Router history={history}>
    <Route path="/disclaimer" component={Disclaimer} />
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);

export default router;
