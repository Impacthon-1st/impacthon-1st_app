import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation, BottomNavigation} from '@navigation';
import TestScreen from '@screens/TestScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Tab'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'Tab'}
        component={BottomNavigation}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'Auth'}
        component={AuthNavigation}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'Test'}
        component={TestScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
