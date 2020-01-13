import { HISTORY, HISTORY_ERROR } from '../actions/types';

const INITIAL_STATE = {
  history: {},
  errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HISTORY:
      return { ...state, history: action.payload }
    case HISTORY_ERROR:
      return { ...state, errorMessage: action.payload }
    default:
      return state;
  }
}