import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';
import React from 'react';
import {RegisterScreen} from '@screens/auth';
import LoginScreen from '@screens/auth/LoginScreen.tsx';
// import {RegisterScreen} from '@screens/auth';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
