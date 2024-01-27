import {AuthNavigation, BottomNavigation} from '@navigation';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';
import React from 'react';
import PotRoundupNavigation from './PotRoundupNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'PotRoundup'}
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
      <Stack.Screen
        name={'PotRoundup'}
        component={PotRoundupNavigation}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
