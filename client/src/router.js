import React from "react";
import { Router, Route, browserHistory } from "react-router";

// Top-level components
import Admin from "app-components/admin";
import Disclaimer from "app-components/disclaimer";
import App from "app-components/app";

// import Login from "app-components/login";
// import Photos from "app-components/photos";
// import Beers from "app-components/beers";
// import Events from "app-components/events";
// import About from "app-components/about";

const router = (
  <Router history={browserHistory}>
    <Route path="/admin" component={Admin} />
    <Route path="/disclaimer" component={Disclaimer} />
    <Route path="/" component={App} />
  </Router>
);

export default router;
