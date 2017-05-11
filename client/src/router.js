import React from "react";
import { Router, Route, browserHistory } from "react-router";

// Top-level components
import Disclaimer from "app-components/disclaimer";
import App from "app-components/app";

const router = (
  <Router history={browserHistory}>
    <Route path="/disclaimer" component={Disclaimer} />
    <Route path="/" component={App} />
  </Router>
);

export default router;
