import axios from 'axios';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = token => {
  axios.defaults.headers.common.Authorization = '';
};
