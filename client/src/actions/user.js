import { USER_SET_CURRENT_USER, USER_REMOVE_CURRENT_USER } from "../action_types";

export function setCurrentUser(payload) {
  return {
    type: USER_SET_CURRENT_USER,
    payload
  };
}

export function removeCurrentUser(payload) {
  return {
    type: USER_REMOVE_CURRENT_USER,
    payload
  };
}
