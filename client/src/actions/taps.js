import { TAPS_SET_COLLECTION, TAPS_ADD } from "../action_types";

export function setTaps(payload) {
  return {
    type: TAPS_SET_COLLECTION,
    payload
  };
}

export function addTap(payload) {
  return {
    type: TAPS_ADD,
    payload,
  }
}
