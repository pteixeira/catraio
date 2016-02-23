import {
  clone,
  concat,
  initial,
  remove,
  partition,
  map,
} from "lodash";

import {
  BEERS_SET_COLLECTION,

  BEERS_ADD_REQUEST,
  BEERS_ADD_SUCCESS,
  BEERS_ADD_FAILURE,

  BEERS_UPDATE_REQUEST,
  BEERS_UPDATE_SUCCESS,
  BEERS_UPDATE_FAILURE,

  BEERS_DELETE_REQUEST,
  BEERS_DELETE_FAILURE
} from "../action_types";

export default function beers(state = [], action) {
  const { payload, type } = action;

  switch (type) {
  case BEERS_SET_COLLECTION:
    return payload;

  //------------------------------------------------------- Add Beer
  case BEERS_ADD_SUCCESS:
    return concat([], state, payload);

  case BEERS_ADD_FAILURE:
    return concat([], initial(state));

  //------------------------------------------------------- Update Beer
  case BEERS_UPDATE_SUCCESS:
    const beers = clone(state);
    return map(beers, (beer) => {
      return beer.id === payload.id ? payload : beer;
    });


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
