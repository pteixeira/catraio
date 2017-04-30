import React from "react";
import { Router, Route, browserHistory } from "react-router";

// Top-level components
import App from "app-components/app";
import Home from "app-components/home";
import Disclaimer from "app-components/disclaimer";
import Admin from "app-components/admin";

// import Login from "app-components/login";
// import Photos from "app-components/photos";
// import Beers from "app-components/beers";
// import Events from "app-components/events";
// import About from "app-components/about";

const router = (
  <Router history={browserHistory}>
    <Route path="/disclaimer" component={Disclaimer} />
    <Route path="/admin" component={Admin} />
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);

export default router;
