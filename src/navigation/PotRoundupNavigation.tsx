import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FindPotScreen from '@screens/FindPotScreen';
import RequestPotScreen from '@screens/RequestPotScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

const PotRoundupNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="RequestPot"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => null}>
      <Tab.Screen name="FindPot" component={FindPotScreen} />
      <Tab.Screen name="RequestPot" component={RequestPotScreen} />
    </Tab.Navigator>
  );
};

export default PotRoundupNavigation;
