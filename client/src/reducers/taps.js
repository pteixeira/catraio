import { merge } from "lodash";

import { TAPS_SET_COLLECTION, TAPS_ADD, TAPS_UPDATE, TAPS_DELETE } from "../action_types";

export default function taps(state = [], action) {
  switch (action.type) {
    case TAPS_SET_COLLECTION:
      return action.payload;

    default:
      return state;
  }
}
