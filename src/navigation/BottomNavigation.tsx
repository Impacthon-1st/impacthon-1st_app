import {HomeIcon, PersonIcon, TripIcon} from '@components/icons/bottom-tab';
import MenuIcon from '@components/icons/bottom-tab/MenuIcon.tsx';
import {BottomTabBar} from '@components/layout';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import TestScreen from '@screens/TestScreen.tsx';
import {HomeScreen} from '@screens/bottom-tab';
import React, {useEffect} from 'react';
import {useTheme} from 'styled-components/native';
import PodRoundupNavigation from './PodRoundupNavigation';

import TripScreen from '@screens/bottom-tab/TripScreen.tsx';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<any>();
  useEffect(() => {
    navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray.body,
        tabBarInactiveTintColor: colors.gray.disabled,
      }}
      initialRouteName="Pod">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({focused}) => <HomeIcon selected={focused} />,
        }}
      />
      <Tab.Screen
        name="Trip"
        component={TripScreen}
        options={{
          tabBarLabel: '여행',
          tabBarIcon: ({focused}) => <TripIcon selected={focused} />,
        }}
      />
      <Tab.Screen
        name="Pod"
        component={PodRoundupNavigation}
        options={{
          tabBarLabel: '팟 모집',
          tabBarIcon: ({focused}) => <PersonIcon selected={focused} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={TestScreen}
        options={{
          tabBarLabel: '더보기',
          tabBarIcon: ({focused}) => <MenuIcon selected={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
