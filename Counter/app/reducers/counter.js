import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  color: 'lightgray'
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
      case types.INCREMENT5:
        return {
          ...state,
          count: state.count + 5
        };
      case types.TURNRED:
        return {
          ...state,
          color: 'red'
        };
    default:
      return state;
  }
}
