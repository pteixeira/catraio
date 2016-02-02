import { BEERS_SET_COLLECTION } from "../action_types";

export default function beers(state = [], action) {
  switch (action.type) {
    case BEERS_SET_COLLECTION:
      return action.payload;

    default:
      return state;
  }
}
