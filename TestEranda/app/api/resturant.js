
import {Axios} from './axiosClient';

export const loadResturantData = data => {
  let url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    data.lat +
    ',' +
    data.long +
    '&radius=500&type=restaurant&key=AIzaSyCS-Q2QnDSuvpE2OL7CLa6_iArG-AuZYUw';
  return Axios.post(url, data);
};
