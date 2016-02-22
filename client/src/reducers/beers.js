import {
  clone,
  concat,
  initial,
  remove,
  partition
} from "lodash";

import {
  BEERS_SET_COLLECTION,
  BEERS_ADD_REQUEST,
  BEERS_ADD_FAILURE,
  BEERS_DELETE_REQUEST,
  BEERS_DELETE_FAILURE
} from "../action_types";

export default function beers(state = [], action) {
  const { payload, type } = action;

  switch (type) {
  case BEERS_SET_COLLECTION:
    return payload;

  //------------------------------------------------------- Add Beer
  case BEERS_ADD_REQUEST:
    return concat([], state, payload);

  case BEERS_ADD_FAILURE:
    return concat([], initial(state));

  //------------------------------------------------------- Delete Beer
  case BEERS_DELETE_REQUEST:
    let newBeers = clone(state);
    remove(newBeers, (b) => b.id === payload.id);
    return newBeers;

  case BEERS_DELETE_FAILURE:
    const [ before, after ] = partition(state, beer => beer.position < payload.position );
    return concat(before, payload, after);

  default:
    return state;
  }
}
