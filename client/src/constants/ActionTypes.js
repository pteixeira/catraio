// Action types
export const ADD_BEER = "ADD_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const ADD_TAP = "ADD_TAP";
export const REMOVE_TAP = "REMOVE_TAP";
export const SET_BEERS = "SET_BEERS";

// Action creators
export function setBeers(beers) {
  return {
    type: SET_BEERS,
    beers: beers
  }
}
