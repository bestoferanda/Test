import {loadWeatherData,} from '../../api/weather';
  import {Alert} from 'react-native';
  //basicAuthenticate
  export function* getWeatherDataAsnyc(actions) {
    var {callBack, data} = actions.payload;
    try {
      const response = yield loadWeatherData(data);
      if(response.status === 200){
        callBack(response.data);
      }
      else{
        Alert.alert('API Error');
      }
    } catch (error) {
      return false;
    }
  }
  
  
  
  
  