import React, {Suspense, useEffect, useState} from 'react';
import {SafeAreaView} from '@components/custom';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import {Header} from '@components/layout';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import useLocation from '@hooks/useLocation.tsx';

const MapScreen = () => {
  const location = useLocation();
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <Header title="여행" />
      <View style={{flex: 1, width: '100%'}}>
        {location && (
          <Suspense fallback={<View />}>
            <MapView
              style={{flex: 1}}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}>
              <Marker
                coordinate={{latitude: 37.78825, longitude: -122.4324}}
                title="this is a marker"
                description="this is a marker example"
              />
            </MapView>
          </Suspense>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
