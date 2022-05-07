import axios from 'axios';


const url = 'https://api.openweathermap.org/';

export const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

Axios.interceptors.response.use(function (response) {
  console.log(response)
  return response;
});
