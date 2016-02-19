import { setTaps } from "../actions/taps";
import { setBeers } from "../actions/beers";
import { setEvents } from "../actions/events";

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
}
