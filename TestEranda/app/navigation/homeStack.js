import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { WeatherDetails, NearbyRestaurants } from '../screens';
const Tab = createMaterialTopTabNavigator();

export default HomeTab = () => {
  
    return (
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen name="Weather Details" component={WeatherDetails} />
        <Tab.Screen name="Nearby Restaurants" component={NearbyRestaurants} />
      </Tab.Navigator>
    );
  };