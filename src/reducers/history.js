import { HISTORY, HISTORY_ERROR } from '../actions/types';

const INITIAL_STATE = {
  historyList: {},
  errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HISTORY:
      return { ...state, historyList: action.payload }
    case HISTORY_ERROR:
      return { ...state, errorMessage: action.payload }
    default:
      return state;
  }
}