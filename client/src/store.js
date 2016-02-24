import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import Immutable from "immutable";

import appReducer from "./reducers/app";

const initialState = {
  beers: Immutable.Map(),
  taps: Immutable.Map(),
  events: Immutable.List.of(),
  pastevents: Immutable.List.of(),
  user: ""
};

const store = createStore(appReducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
