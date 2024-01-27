import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FindPodScreen from '@screens/FindPodScreen';
import RequestPodScreen from '@screens/RequestPodScreen';
import React from 'react';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const PodRoundupNavigation = () => {
  return (
    // <View>
    <Tab.Navigator
      initialRouteName="RequestPod"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => null}>
      <Tab.Screen name="FindPod" component={FindPodScreen} />
      <Tab.Screen name="RequestPod" component={RequestPodScreen} />
    </Tab.Navigator>
    // </View>
  );
};

export default PodRoundupNavigation;
