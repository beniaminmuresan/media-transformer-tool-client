import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, PASSWORD_RECOVER_ERROR, PASSWORD_RECOVER_USER } from './types';
import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/v1/users/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.auth_token });
    localStorage.setItem('token', response.data.auth_token);
    callback();
  } catch (e) {
    const errorMessage = e.response.data.errors.join(', ');
    dispatch({ type: AUTH_ERROR, payload: errorMessage })
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/v1/users/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.auth_token });
    localStorage.setItem('token', response.data.auth_token);
    callback();
  } catch (e) {
    const errorMessage = e.response.data.error.user_authentication;
    dispatch({ type: AUTH_ERROR, payload: errorMessage })
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const recoverpassword = email => async dispatch => {
  try {
    const response = await axios.post('v1/users/recover_password', email);
    dispatch({ type: PASSWORD_RECOVER_USER, payload: response.data.message });
    dispatch({ type: PASSWORD_RECOVER_ERROR, payload: '' });
  } catch (e) {
    const errorMessage = e.response.data.error;
    dispatch({ type: PASSWORD_RECOVER_USER, payload: '' });
    dispatch({ type: PASSWORD_RECOVER_ERROR, payload: errorMessage });
  }
}

export const uploadfile = data => async dispatch => {
  let formData = new FormData();
  formData.append('name', data.name)
  formData.append('attachment', data.attachment)
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': localStorage.getItem('token')
    }
  }
  const url = '/v1/media_histories/';
  try {
    const response = await axios.post(url, formData, config);
    dispatch({ type: UPLOAD_FILE, payload: response.data.image_url });
    dispatch({ type: UPLOAD_FILE_ERROR, payload: '' });
  } catch (e) {
    const errorMessage = e.response.data.error;
    dispatch({ type: UPLOAD_FILE, payload: '' });
    dispatch({ type: UPLOAD_FILE_ERROR, payload: errorMessage });
  }
}