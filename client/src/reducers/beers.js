import Immutable from "immutable";

import {
  BEERS_SET_COLLECTION,

  BEERS_ADD_SUCCESS,

  BEERS_UPDATE_SUCCESS,

  BEERS_DELETE_SUCCESS
} from "../action_types";

export default function beers(state = Immutable.Map(), action) {
  const { payload, type } = action;

  switch (type) {
  case BEERS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  // ------------------------------------------------------- Add Beer
  // ------------------------------------------------------- Update Beer
  case BEERS_ADD_SUCCESS:
  case BEERS_UPDATE_SUCCESS:
    return state.set(payload.id.toString(), Immutable.fromJS(payload));

  // ------------------------------------------------------- Delete Beer
  case BEERS_DELETE_SUCCESS:
    // because all object keys in JS are strings, even numeric ones,
    // and because we set the initial collection from a hash with numeric
    // ids, we need to convert id to a string, otherwise Immutable.Map
    // returns an undefined object
    //
    // https://facebook.github.io/immutable-js/docs/#/Map/Map
    return state.delete(payload.get("id").toString());

  default:
    return state;
  }
}
