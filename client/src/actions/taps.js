import { TAPS_SET_COLLECTION } from "../action_types";

export function setTaps(payload) {
  return {
    type: TAPS_SET_COLLECTION,
    payload
  };
}
