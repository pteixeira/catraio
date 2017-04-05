import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  SET_AUTH
} from "../action_types";

export default function authenticated(state = false, action) {
  const { payload, type } = action;

  switch (type) {

  case SET_AUTH:
    return payload;

  case USER_LOGIN_SUCCESS:
    localStorage.setItem("token", payload);
    return true;

  case USER_LOGIN_FAILURE:
    localStorage.setItem("token", null);
    return false;

  default:
    return state;
  }
}
