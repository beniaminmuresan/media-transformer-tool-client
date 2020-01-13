import { TEXT_TO_SPEECH_URL, TEXT_TO_SPEECH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  textToSpeechUrl: '',
  textToSpeechError: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEXT_TO_SPEECH_URL:
      return { ...state, textToSpeechUrl: action.payload }
    case TEXT_TO_SPEECH_ERROR:
      return { ...state, textToSpeechError: action.payload }
    default:
      return state;
  }
}