import { EVENTS_SET_COLLECTION } from "../action_types";

export default function events(state = [], action) {
  switch (action.type) {
    case EVENTS_SET_COLLECTION:
      return action.payload;

    default:
      return state;
  }
}
