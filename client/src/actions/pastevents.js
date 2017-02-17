import { createAction } from "redux-actions";

import { API_HOST } from "../config/env";
import { PASTEVENTS_ADD_REQUEST, PASTEVENTS_ADD_SUCCESS, PASTEVENTS_ADD_FAILURE } from "../action_types";

const addPastEventsRequest = createAction(PASTEVENTS_ADD_REQUEST);
const addPastEventsSuccess = createAction(PASTEVENTS_ADD_SUCCESS);
const addPastEventsFailure = createAction(PASTEVENTS_ADD_FAILURE);

export function addPastEvents() {
  return function(dispatch) {
    dispatch(addPastEventsRequest());

    return fetch(`${API_HOST}/events/past`)
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(events => dispatch(addPastEventsSuccess(events)))
    .catch(err => dispatch(addPastEventsFailure(err)));
  }
}
