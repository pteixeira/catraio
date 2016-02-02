import { createStore } from "redux";

import appReducer from "./reducers/app";

const initialState = {
  beers: [],
  taps: [],
};

const store = createStore(appReducer, initialState);

export default store;
