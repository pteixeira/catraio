import { combineReducers } from "redux";

import beers from "./beers";
import taps from "./taps";
import events from "./events";
import pastevents from "./pastevents";
import user from "./user";

export default combineReducers({
  beers,
  taps,
  events,
  pastevents,
  user
});

// above call for combineReducers is equivalent to the function below
//
// export default function appReducer(state = initialState, action) {
//   return {
//     beers: beers(state.beers, action),
//     taps: taps(state.taps),
//     events: events(state.events),
//     pastevents: pastevents(state.pastevents)
//     user: user(state.user)
//   };
// }
