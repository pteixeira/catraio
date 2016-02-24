import { createAction } from "redux-actions";
import "exports?self.fetch!whatwg-fetch";

import { API_HOST } from "../config/env";
import {
  BEERS_SET_COLLECTION,

  BEERS_ADD_REQUEST,
  BEERS_ADD_SUCCESS,
  BEERS_ADD_FAILURE,

  BEERS_UPDATE_REQUEST,
  BEERS_UPDATE_SUCCESS,
  BEERS_UPDATE_FAILURE,

  BEERS_DELETE_REQUEST,
  BEERS_DELETE_SUCCESS,
  BEERS_DELETE_FAILURE
} from "../action_types";

import { defaultHeaders } from "../util/request";

export function setBeers(collection) {
  return {
    type: BEERS_SET_COLLECTION,
    payload: collection,
  };
}

// --------------------------------------------------------- Add new beer
const addBeerRequest = createAction(BEERS_ADD_REQUEST);
const addBeerSuccess = createAction(BEERS_ADD_SUCCESS);
const addBeerFailure = createAction(BEERS_ADD_FAILURE);

export function addBeer(params) {
  return function(dispatch) {
    dispatch(addBeerRequest(params));

    return fetch(`${API_HOST}/beers`, {
      method: "post",
      headers: defaultHeaders(),
      body: JSON.stringify({
        beer: params
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(addBeerSuccess(json)))
    .catch(err => dispatch(addBeerFailure(params)));
  }
}

// --------------------------------------------------------- Edit beer
const updateBeerRequest = createAction(BEERS_UPDATE_REQUEST);
const updateBeerSuccess = createAction(BEERS_UPDATE_SUCCESS);
const updateBeerFailure = createAction(BEERS_UPDATE_FAILURE);

export function updateBeer(params) {
  return function (dispatch) {
    dispatch(updateBeerRequest());

    const id = params.id;
    delete params.id;

    return fetch(`${API_HOST}/beers/${id}`, {
      method: "put",
      headers: defaultHeaders(),
      body: JSON.stringify({
        beer: params,
      }),
    })
    .then((res) => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(json => dispatch(updateBeerSuccess(json)))
    .catch(err => dispatch(updateBeerFailure(err)));
  }
}

// --------------------------------------------------------- Remove beer
const deleteBeerRequest = createAction(BEERS_DELETE_REQUEST);
const deleteBeerSuccess = createAction(BEERS_DELETE_SUCCESS);
const deleteBeerFailure = createAction(BEERS_DELETE_FAILURE);

export function deleteBeer(beer) {
  return function (dispatch) {
    dispatch(deleteBeerRequest());

    return fetch(`${API_HOST}/beers/${beer.get("id")}`, {
      method: "delete",
      headers: defaultHeaders(),
      body: JSON.stringify({
        beer
      })
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(() => dispatch(deleteBeerSuccess(beer)))
    .catch((err) => dispatch(deleteBeerFailure()))
  }
}
