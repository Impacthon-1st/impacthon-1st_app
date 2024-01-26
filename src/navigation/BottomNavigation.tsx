import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestScreen from '@screens/TestScreen.tsx';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
