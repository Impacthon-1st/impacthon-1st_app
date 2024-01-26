import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={TestScreen} />
      <Stack.Screen name="Register" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
