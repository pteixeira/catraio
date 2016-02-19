import { EVENTS_SET_COLLECTION } from "../action_types";

export function setEvents(collection) {
  return {
    type: EVENTS_SET_COLLECTION,
    payload: collection,
  };
}
