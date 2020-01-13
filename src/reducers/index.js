import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import upload from './upload';
import text_to_speech from './text_to_speech';


export default combineReducers({
  auth,
  form: formReducer,
  upload: upload,
  text_to_speech: text_to_speech
});