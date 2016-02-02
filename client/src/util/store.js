import { setTaps } from "../actions/taps";

const API_HOST = "http://localhost:3000";

export function initStoreFromServer(store) {
  fetch(`${API_HOST}/taps`)
  .then(res => res.json())
  .then(taps => store.dispatch(setTaps(taps)))
  .catch(err => console.log(err));
}
