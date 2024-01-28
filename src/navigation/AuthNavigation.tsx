import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '@screens/TestScreen';
import React, {useEffect} from 'react';
import {RegisterScreen} from '@screens/auth';
import LoginScreen from '@screens/auth/LoginScreen.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// import {RegisterScreen} from '@screens/auth';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    AsyncStorage.getItem('access').then(token => {
      if (token) {
        // navigation.navigate('Main');
      }
    });
  }, [navigation]);
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
