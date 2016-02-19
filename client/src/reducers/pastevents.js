import { PASTEVENTS_ADD_SUCCESS, PASTEVENTS_ADD_FAILURE } from "../action_types";
import { concat } from "lodash";

export default function pastevents(state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case PASTEVENTS_ADD_SUCCESS:
    return concat([], state, payload);

  case PASTEVENTS_ADD_FAILURE:
    return [];

  default:
    return state;
  }
}
