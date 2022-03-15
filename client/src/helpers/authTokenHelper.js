import axios from 'axios';
import { deleteAuthToken, saveAuthToken } from './localStorageHelper';

export const saveToken = (access_token) => {
  setAuthToken(access_token);
  saveAuthToken(access_token);
};

export const clearToken = () => {
  deleteAuthToken();
  clearAuthToken();
};

// header methods
const setAuthToken = (token) => {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    console.log(axios.defaults.headers)
  } catch (e) {
    console.log('Error while settup token', e);
  }
};

const clearAuthToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};
