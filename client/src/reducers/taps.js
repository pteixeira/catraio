import Immutable from "immutable";

import {
  TAPS_SET_COLLECTION,

  TAPS_ADD_REQUEST,
  TAPS_ADD_SUCCESS,
  TAPS_ADD_FAILURE,

  TAPS_UPDATE_SUCCESS,

  TAPS_DELETE_REQUEST,
  TAPS_DELETE_SUCCESS,
  TAPS_DELETE_FAILURE,

  TAPS_UPDATE,
  TAPS_DELETE,
} from "../action_types";

export default function taps(state = Immutable.Map(), action) {
  const { payload, type } = action;

  switch (type) {

  // ------------------------------------------------------- Set Taps
  case TAPS_SET_COLLECTION:
    return Immutable.fromJS(payload);

  // ------------------------------------------------------- Add Tap
  // ------------------------------------------------------- Update/Move Tap
  case TAPS_ADD_SUCCESS:
  case TAPS_UPDATE_SUCCESS:
    return state.set(payload.id.toString(), Immutable.fromJS(payload));

  // ------------------------------------------------------- Delete Tap
  case TAPS_DELETE_SUCCESS:
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
