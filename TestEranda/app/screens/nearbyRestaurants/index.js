import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import {getresturantData} from '../../redux/actions/resturantActions';
import Geolocation from 'react-native-geolocation-service';

const NearbyRestaurants = props => {
  const [dataSet, setDataSet] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const dispatch = useDispatch();

  const loadResturantData = async (latitude, longitude) => {
    dispatch(
      getresturantData({
        data: {
          lat: latitude,
          long: longitude,
        },
        callBack: data => {
          console.log(data);
          if (data && data.results && data.results.length > 0) {
            setDataSet(data.results);
          } else {
            Alert.alert('No nearby resturants available');
          }
        },
      }),
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        getCurrentLocation();
      }
    }

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        loadResturantData(latitude, longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    requestPermissions();
    getCurrentLocation();
  }, []);

  const showNearbys = () => {
    return dataSet.map((value, index) => {
      return (
        <MapView.Marker
          key={index}
          coordinate={{
            latitude: value.geometry.location.lat,
            longitude: value.geometry.location.lng,
          }}
          title={value.name}></MapView.Marker>
      );
    });
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />

          {dataSet && dataSet.length > 0 && showNearbys()}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default NearbyRestaurants;
