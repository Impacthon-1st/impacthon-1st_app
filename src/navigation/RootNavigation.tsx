import {AuthNavigation, BottomNavigation} from '@navigation';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';
import React from 'react';
import PodRoundupNavigation from './PodRoundupNavigation';
import MapScreen from '@screens/MapScreen.tsx';
import CreatePodScreen from '@screens/pod/CreatePodScreen.tsx';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'CreatePodScreen'}
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
        component={PodRoundupNavigation}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name={'MapScreen'} component={MapScreen} />
      <Stack.Screen name={'CreatePodScreen'} component={CreatePodScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
