import { setTaps } from "../actions/taps";
import { setBeers } from "../actions/beers";
import { setEvents } from "../actions/events";
import { setCurrentUser, removeCurrentUser } from "../actions/user";
import { headers } from "../util/request";

const API_HOST = "http://localhost:3000";

export function initStoreFromServer(store) {
  // Populate taps
  fetch(`${API_HOST}/taps`)
  .then(res => res.json())
  .then(taps => store.dispatch(setTaps(taps)))
  .catch(err => console.log(err));

  // Populate beers
  fetch(`${API_HOST}/beers`)
  .then(res => res.json())
  .then(beers => store.dispatch(setBeers(beers)))

  fetch(`${API_HOST}/events`)
  .then(res => res.json())
  .then(events => store.dispatch(setEvents(events)))
  .catch(err => console.log(err));

  const token = localStorage.getItem("token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;

    fetch(`${API_HOST}/me`, {
      method: "get",
      headers
    })
    .then(res => {
      if (res.ok) return res.json();

      throw new Error(res.status);
    })
    .then(user => store.dispatch(setCurrentUser(user.email)))
    .catch(err => {
      localStorage.removeItem("token"); // move to action?
      store.dispatch(removeCurrentUser());
    })
  }
}
