import {loadResturantData,} from '../../api/resturant';
  import {Alert} from 'react-native';
  //basicAuthenticate
  export function* getResturantDataAsnyc(actions) {
    var {callBack, data} = actions.payload;
    try {
      const response = yield loadResturantData(data);
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
  
  
  
  
  