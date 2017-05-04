import Immutable from "immutable";

import { BEERS_SET_COLLECTION } from "../action_types";

export default function beers(state = Immutable.Map(), action) {
  const { payload, type } = action;

  switch (type) {
  case BEERS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  default:
    return state;
  }
}
