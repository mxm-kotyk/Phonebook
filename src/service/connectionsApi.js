import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registerUser = async userData => {
  const response = await axios.post('/users/signup', userData);
  console.log(response);
};
