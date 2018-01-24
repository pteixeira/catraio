import Immutable from "immutable";

import { GALLERY_SET_COLLECTION } from "../action_types";

export default function gallery(state = Immutable.List(), action) { // eslint-disable-line new-cap

  const { payload, type } = action;

  switch (type) {

  // ------------------------------------------------------- Set Taps
  case GALLERY_SET_COLLECTION:
    return Immutable.fromJS(payload);

  default:
    return state;
  }
}
