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

import { headers } from "../util/request";

export function setTaps(payload) {
  return {
    type: TAPS_SET_COLLECTION,
    payload
  };
}

//--------------------------------------------------------- Add new tap
const addTapRequest = createAction(TAPS_ADD_REQUEST);
const addTapSuccess = createAction(TAPS_ADD_SUCCESS);
const addTapFailure = createAction(TAPS_ADD_FAILURE);

export function addTap(params) {
  return function(dispatch) {
    dispatch(addTapRequest(params));
    const token = localStorage.getItem("token");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${API_HOST}/taps`, {
      method: "post",
      headers,
      body: JSON.stringify({
        tap: params
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(addTapSuccess(json.tap)))
    .catch(err => dispatch(addTapFailure(params)))
  }
}

//--------------------------------------------------------- Move taps up / down
const moveTapUpRequest = createAction(TAPS_MOVE_UP_REQUEST);
const moveTapUpSuccess = createAction(TAPS_MOVE_UP_SUCCESS);
const moveTapUpFailure = createAction(TAPS_MOVE_UP_FAILURE);

export function moveTapUp(id) {
  return function(dispatch) {
    dispatch(moveTapUpRequest(id));
    const token = localStorage.getItem("token");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${API_HOST}/taps/${id}`, {
      method: "put",
      headers,
      body: JSON.stringify({
        action: "move_up",
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(moveTapUpSuccess(json.tap)))
    .catch(err => dispatch(moveTapUpFailure(err)));
  }
}

//--------------------------------------------------------- Remove taps
const deleteTapRequest = createAction(TAPS_DELETE_REQUEST);
const deleteTapSuccess = createAction(TAPS_DELETE_SUCCESS);
const deleteTapFailure = createAction(TAPS_DELETE_FAILURE);

export function deleteTap(tap) {
  return function (dispatch) {
    dispatch(deleteTapRequest(tap));
    const token = localStorage.getItem("token");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${API_HOST}/taps/${tap.id}`, {
      method: "delete",
      headers,
      body: JSON.stringify({
        tap
      })
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(() => dispatch(deleteTapSuccess()))
    .catch((err) => { console.log(err); dispatch(deleteTapFailure(tap)) })
  }
}
