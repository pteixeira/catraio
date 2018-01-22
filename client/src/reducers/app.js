import { combineReducers } from "redux";

import beers from "./beers";
import taps from "./taps";
import events from "./events";
import pastevents from "./pastevents";
import gallery from "./gallery";

export default combineReducers({
  beers,
  taps,
  events,
  pastevents,
  gallery,
});
