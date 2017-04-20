import { API_HOST } from "../config/env";
import { setTaps } from "../actions/taps";
import { setBeers } from "../actions/beers";
import { setEvents } from "../actions/events";
import { setCurrentUser, removeCurrentUser, setAuth } from "../actions/user";
import { defaultHeaders } from "../util/request";

export function initStoreFromServer(store) {
  // Populate taps
  fetch(`${API_HOST}/newbeers`)
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
    .then(user => {
      store.dispatch(setCurrentUser(user.email));
      store.dispatch(setAuth(true)); // TODO: remake maybe
    })
    .catch(err => store.dispatch(removeCurrentUser(err)))
  }
}
