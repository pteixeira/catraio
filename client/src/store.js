import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import appReducer from "./reducers/app";

const initialState = {
  beers: [],
  taps: [],
  events: [],
  pastevents: []
  user: ''
};

//const store = createStore(appReducer, initialState, applyMiddleware(
const store = createStore(appReducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
