import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';
import {RegisterScreen} from '@screens/auth';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Register'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={TestScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
