import {
  clone,
  concat,
  initial,
  remove,
  partition
} from "lodash";

import {
  TAPS_SET_COLLECTION,

  TAPS_ADD_REQUEST,
  TAPS_ADD_SUCCESS,
  TAPS_ADD_FAILURE,

  TAPS_DELETE_REQUEST,
  TAPS_DELETE_SUCCESS,
  TAPS_DELETE_FAILURE,

  TAPS_UPDATE,
  TAPS_DELETE,
} from "../action_types";

export default function taps(state = [], action) {
  const { payload, type } = action;

  switch (type) {

  //------------------------------------------------------- Set Taps
  case TAPS_SET_COLLECTION:
    return payload;

  //------------------------------------------------------- App Tap
  case TAPS_ADD_REQUEST:
    return concat([], state, payload);

  case TAPS_ADD_FAILURE:
    return concat([], initial(state));

  //------------------------------------------------------- Delete Tap
  case TAPS_DELETE_REQUEST:
    let newTaps = clone(state);
    remove(newTaps, (t) => t.id === payload.id);
    return newTaps;

  case TAPS_DELETE_FAILURE:
    const [ before, after ] = partition(state, tap => tap.position < payload.position );
    return concat(before, payload, after);

  default:
    return state;
  }
}
