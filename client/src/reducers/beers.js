import { BEERS_SET_COLLECTION } from "../action_types";

export default function beers(state = [], action) {
  const { payload, type } = action;

  switch (type) {
  case BEERS_SET_COLLECTION:
    return payload;

  default:
    return state;
  }
}
