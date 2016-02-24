import Immutable from "immutable";

import { EVENTS_SET_COLLECTION } from "../action_types";

export default function events(state = Immutable.List.of(), action) {
  const { payload, type } = action;
  switch (type) {
  case EVENTS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  default:
    return state;
  }
}
