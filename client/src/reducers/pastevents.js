import Immutable from "immutable";

import { PASTEVENTS_ADD_SUCCESS, PASTEVENTS_ADD_FAILURE } from "../action_types";

export default function pastevents(state = Immutable.List.of(), action) {
  const { type, payload } = action;

  switch (type) {
  case PASTEVENTS_ADD_SUCCESS:
    return Immutable.fromJS(payload);

  case PASTEVENTS_ADD_FAILURE:
    return Immutable.List.of();

  default:
    return state;
  }
}
