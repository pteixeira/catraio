// import { API_HOST } from "../config/env";
import { setTaps } from "app/actions/taps";

const dummyDS = [{"brand":"Budvar","name":"","style":"CZ · Czech Pilsner","abv":"5.0","pint":"3.00","halfPint":"1.50"},{"brand":"Vandoma","name":"Vandominator","style":"PT · Doppelbock ","abv":"8.0","pint":"5.50","halfPint":"3.00"},{"brand":"Weihenstephaner ","name":"Vitus","style":"GER · Weizenbock","abv":"7.7","pint":"5.50","halfPint":"3.00"},{"brand":"Barona","name":"","style":"PT · Blonde Ale","abv":"5.8","pint":"4.50","halfPint":"2.50"},{"brand":"Post Scriptum ","name":"","style":"PT · Black IPA","abv":"7.5","pint":"5.50","halfPint":"3.00"},{"brand":"Browar Widawa","name":"Tropical Storm IPA","style":"POL · American IPA","abv":"6.2","pint":"5.50","halfPint":"3.00"},{"brand":"D'Ourique","name":"Condestável","style":"PT · Belgian Strong Dark Ale","abv":"9.0","pint":"5.50","halfPint":"3.00"},{"brand":"De Molen","name":"Tsarina Esra","style":"NLD · Imperial Porter","abv":"10.1","pint":"6.50","halfPint":"3.50"},{"brand":"LETRA ","name":"Letra D","style":"PT · American Red Ale","abv":"6.0","pint":"4.50","halfPint":"2.50"},{"brand":"Oitava Colina","name":"Zé Arnaldo","style":"PT · Robust Porter","abv":"6.0","pint":"4.50","halfPint":"2.50"},{"brand":"Dois Corvos","name":"Guanabana Mañana","style":"PT · American IPA","abv":"7.6","pint":"5.50","halfPint":"3.00"},{"brand":"Musa","name":"Café D'Ale Mar","style":"PT · Coffee Red Ale","abv":"5.8","pint":"4.50","halfPint":"2.50"}];

export function initStoreFromServer(store) {
  // Populate Taps
  // store.dispatch(setTaps(dummyDS));
  fetch(`http://localhost:3000/taps`, {
    method: "GET"
  })
  .then(res => res.json())
  .then(taps => store.dispatch(setTaps(taps)))
  .catch(err => console.error(err));
}
