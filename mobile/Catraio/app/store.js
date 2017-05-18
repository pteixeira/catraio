import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";

import thunkMiddleware from "redux-thunk";
import Immutable from "immutable";

import appReducer from "app/reducers/app";

const initialState = { taps: Immutable.List.of() };

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const store = createStore(appReducer, initialState, composeEnhancers(
  applyMiddleware(thunkMiddleware),
));

export default store;
