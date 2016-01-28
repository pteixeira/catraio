import * as types from "../constants/ActionTypes";

import { merge }from "lodash";
import "exports?self.fetch!whatwg-fetch";

const initialState = {
  "beers": []
};

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
  case types.SET_BEERS:
    console.log("action", action)
    let newState = merge({}, state, {beers: action.beers});
    console.log("newState", newState);
    return newState;
  default:
    return state;
  }
};
