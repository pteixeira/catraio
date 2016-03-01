import {
  USER_SET_CURRENT_USER,
  USER_REMOVE_CURRENT_USER,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../action_types";

export default function user(state = "", action) {
  const { payload, type } = action;

  switch (type) {

  // ------------------------------------------------------- Set Current User
  case USER_SET_CURRENT_USER:
    return payload;

  // ------------------------------------------------------- Remove Current User
  case USER_REMOVE_CURRENT_USER:
    return "";

  default:
    return state;
  }
}
