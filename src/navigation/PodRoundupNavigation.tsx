import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FindPodScreen from '@screens/FindPodScreen';
import RequestPodScreen from '@screens/RequestPodScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

const PodRoundupNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="RequestPod"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => null}>
      <Tab.Screen name="FindPod" component={FindPodScreen} />
      <Tab.Screen name="RequestPod" component={RequestPodScreen} />
    </Tab.Navigator>
  );
};

export default PodRoundupNavigation;
