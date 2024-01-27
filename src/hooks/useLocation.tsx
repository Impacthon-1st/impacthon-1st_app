import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const navigation = useNavigation<any>();
  useEffect(() => {
    Geolocation.getCurrentPosition(res => {
      const {latitude, longitude} = res.coords;
      setLocation({latitude, longitude});
    });
  }, []);
  return location;
};

export default useLocation;
