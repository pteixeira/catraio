import Immutable from "immutable";

import { TAPS_SET_COLLECTION } from "../action_types";

export default function taps(state = Immutable.Map(), action) {

  const { payload, type } = action;

  switch (type) {

  // ------------------------------------------------------- Set Taps
  case TAPS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  default:
    return state;
  }
}
