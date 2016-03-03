import { createAction } from "redux-actions";

import {
 USER_SET_CURRENT_USER,
 USER_REMOVE_CURRENT_USER,

 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
 USER_LOGIN_FAILURE
} from "../action_types";
import { defaultHeaders } from "../util/request";
import { API_HOST } from "../config/env";

export function setCurrentUser(payload) {
  return {
    type: USER_SET_CURRENT_USER,
    payload
  };
}

const userLoginRequest = createAction(USER_LOGIN_REQUEST);
const userLoginSuccess = createAction(USER_LOGIN_SUCCESS);
const userLoginFailure = createAction(USER_LOGIN_FAILURE);

export function userLogin(params) {
  return function(dispatch) {
    dispatch(userLoginRequest(params));

    return fetch(`${API_HOST}/auth/auth_token`, {
      method: "post",
      headers: defaultHeaders(),
      body: JSON.stringify({
        auth: params
      }),
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(res => {
      dispatch(userLoginSuccess(res.jwt))
      dispatch(setCurrentUser(params.email))
    })
    .catch(err => dispatch(userLoginFailure(err)));
  }
}

export function removeCurrentUser(payload) {
  return {
    type: USER_REMOVE_CURRENT_USER,
    payload
  };
}
