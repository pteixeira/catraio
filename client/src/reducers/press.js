import Immutable from "immutable";

import { PRESS_SET_COLLECTION } from "../action_types";

export default function press(state = Immutable.List(), action) { // eslint-disable-line new-cap

  const { payload, type } = action;

  switch (type) {

  // ------------------------------------------------------- Set Taps
  case PRESS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  default:
    return state;
  }
}

