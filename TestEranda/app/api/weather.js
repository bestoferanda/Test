import {Axios} from './axiosClient';

export const loadWeatherData = data => {
  return Axios.post('https://api.openweathermap.org/data/2.5/find?q=Palo+Alto&units=imperial&type=accurate&mode=json&APPID=d600541f8569fb2fabd4c4fabc1ae5ad', data);
};



