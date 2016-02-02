import { BEERS_SET_COLLECTION } from "../action_types";

export function setBeers(collection) {
  return {
    type: BEERS_SET_COLLECTION,
    payload: collection,
  };
}
