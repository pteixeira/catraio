// import { API_HOST } from "../config/env";
import { setTaps } from "app/actions/taps";


export function initStoreFromServer(store) {
  // Populate Taps
  fetch(`http://localhost:3000/taps`, {
    method: "GET"
  })
  .then(res => res.json())
  .then(taps => store.dispatch(setTaps(taps)))
  .catch(err => console.error(err));
}
