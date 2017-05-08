import * as types from '../actions/actionTypes';

const initialState = {
  color: 'lightgray'
};

export default function colorChanger(state = initialState, action = {}) {
  switch (action.type) {
      case types.TURNRED:
        return {
          ...state,
          color: 'red'
        };
    default:
      return state;
  }
}
