import { createAction } from "redux-actions";

import { API_HOST } from "../config/env";

import "exports?self.fetch!whatwg-fetch";

import {
  TAPS_SET_COLLECTION,

  TAPS_ADD_REQUEST,
  TAPS_ADD_SUCCESS,
  TAPS_ADD_FAILURE,

  TAPS_UPDATE_REQUEST,
  TAPS_UPDATE_SUCCESS,
  TAPS_UPDATE_FAILURE,

  TAPS_MOVE_UP_REQUEST,
  TAPS_MOVE_UP_SUCCESS,
  TAPS_MOVE_UP_FAILURE,

  TAPS_DELETE_REQUEST,
  TAPS_DELETE_SUCCESS,
  TAPS_DELETE_FAILURE,
} from "../action_types";

import { defaultHeaders } from "../util/request";

export function setTaps(payload) {
  return {
    type: TAPS_SET_COLLECTION,
    payload
  };
}

// --------------------------------------------------------- Add new tap
const addTapRequest = createAction(TAPS_ADD_REQUEST);
const addTapSuccess = createAction(TAPS_ADD_SUCCESS);
const addTapFailure = createAction(TAPS_ADD_FAILURE);

export function addTap(params) {
  return function(dispatch) {
    dispatch(addTapRequest(params));

    return fetch(`${API_HOST}/taps`, {
      method: "post",
      headers: defaultHeaders(),
      body: JSON.stringify({
        tap: params
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(addTapSuccess(json)))
    .catch(err => dispatch(addTapFailure(params)))
  }
}

// --------------------------------------------------------- Move taps up / down
const updateTapRequest = createAction(TAPS_UPDATE_REQUEST);
const updateTapSuccess = createAction(TAPS_UPDATE_SUCCESS);
const updateTapFailure = createAction(TAPS_UPDATE_FAILURE);

export function moveTap(id, action) {
  return function(dispatch) {
    dispatch(updateTapRequest(id));

    return fetch(`${API_HOST}/taps/move`, {
      method: "put",
      headers: defaultHeaders(),
      body: JSON.stringify({
        tap: {
          id,
          action
        }
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(setTaps(json)))
    .catch(err => dispatch(updateTapFailure(err)));
  }
}

// -- Update Tap
export function updateTap(params) {
  return function (dispatch) {
    dispatch(updateTapRequest());

    const id = params.id;
    delete params.id;

    return fetch(`${API_HOST}/taps/${id}`, {
      method: "put",
      headers: defaultHeaders(),
      body: JSON.stringify({
        tap: params,
      }),
    })
    .then((res) => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(updateTapSuccess(json)))
    .catch(err => dispatch(updateTapFailure(err)));
  }
}

// --------------------------------------------------------- Remove taps
const deleteTapRequest = createAction(TAPS_DELETE_REQUEST);
const deleteTapSuccess = createAction(TAPS_DELETE_SUCCESS);
const deleteTapFailure = createAction(TAPS_DELETE_FAILURE);

export function deleteTap(tap) {
  return function (dispatch) {
    dispatch(deleteTapRequest());

    return fetch(`${API_HOST}/taps/${tap.get("id")}`, {
      method: "delete",
      headers: defaultHeaders(),
      body: JSON.stringify({
        tap
      })
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(() => dispatch(deleteTapSuccess(tap)))
    .catch((err) => dispatch(deleteTapFailure(tap)) )
  }
}
