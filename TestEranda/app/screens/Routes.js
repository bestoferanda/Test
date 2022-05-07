/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../navigation/authStack';
import {navigationRef} from '../navigation/NavigationService';

export default Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'auth'} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
