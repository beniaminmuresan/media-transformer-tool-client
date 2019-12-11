import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from '../actions/types';

const INITIAL_STATE = {
  uploadFileUrl: '',
  uploadFileError: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return { ...state, uploadFileUrl: action.payload }
    case UPLOAD_FILE_ERROR:
      return { ...state, uploadFileError: action.payload }
    default:
      return state;
  }
}