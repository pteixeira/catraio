import { USER_SET_CURRENT_USER, USER_REMOVE_CURRENT_USER, USER_LOGIN } from "../action_types";
import { defaultHeaders } from "../util/request";
import { API_HOST } from "../config/env";

export function setCurrentUser(payload) {
  return {
    type: USER_SET_CURRENT_USER,
    payload
  };
}

export function userLogin(params) {
  return function(dispatch) {
    // dispatch(addTapRequest(params));

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
    });
  }
}

export function removeCurrentUser(payload) {
  return {
    type: USER_REMOVE_CURRENT_USER,
    payload
  };
}
