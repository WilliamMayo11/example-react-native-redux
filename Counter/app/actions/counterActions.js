import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function incrementByFive() {
  return {
    type: types.INCREMENT5
  };
}

export function turnRed() {
  return {
    type: types.TURNRED
  };
}
