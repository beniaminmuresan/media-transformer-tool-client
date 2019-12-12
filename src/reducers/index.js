import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import upload from './upload';

export default combineReducers({
  auth,
  form: formReducer,
  upload: upload
});