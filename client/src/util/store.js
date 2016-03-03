import { API_HOST } from "../config/env";
import { setTaps } from "../actions/taps";
import { setBeers } from "../actions/beers";
import { setEvents } from "../actions/events";
import { setCurrentUser, removeCurrentUser } from "../actions/user";
import { defaultHeaders } from "../util/request";

const API_HOST = "http://localhost:3000";

export function initStoreFromServer(store) {
  // Populate taps
  fetch(`${API_HOST}/taps`)
  .then(res => res.json())
  .then(taps => store.dispatch(setTaps(taps)));

  // Populate beers
  fetch(`${API_HOST}/beers`)
  .then(res => res.json())
  .then(beers => store.dispatch(setBeers(beers)))

  fetch(`${API_HOST}/events`)
  .then(res => res.json())
  .then(events => store.dispatch(setEvents(events)));

  const token = localStorage.getItem("token");
  if (token) {
    fetch(`${API_HOST}/me`, {
      method: "get",
      headers: defaultHeaders()
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(user => store.dispatch(setCurrentUser(user.email)))
    .catch(err => store.dispatch(removeCurrentUser(err)))
  }
}
