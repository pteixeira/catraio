import { combineReducers } from "redux";

import taps from "./taps";

export default combineReducers({ taps });

// above call for combineReducers is equivalent to the function below
//
// export default function appReducer(state = initialState, action) {
//   return {
//     taps: taps(state.taps),
//   };
// }
