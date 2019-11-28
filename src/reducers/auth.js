import { AUTH_USER, AUTH_ERROR, PASSWORD_RECOVER_ERROR, PASSWORD_RECOVER_USER } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  successRecoveryMessage: '',
  errorRecoveryMessage: '',
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload }
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case PASSWORD_RECOVER_ERROR:
      return { ...state, errorRecoveryMessage: action.payload }
    case PASSWORD_RECOVER_USER:
      return { ...state, successRecoveryMessage: action.payload }
    default:
      return state;
  }
}