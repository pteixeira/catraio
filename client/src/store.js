import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import Immutable from "immutable";

import appReducer from "app-root/reducers/app";

const initialState = {
  beers: Immutable.Map(),
  taps: Immutable.List.of(),
  events: Immutable.List.of(),
  pastevents: Immutable.List.of(),
  gallery: Immutable.List.of(),
};

const store = createStore(appReducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
