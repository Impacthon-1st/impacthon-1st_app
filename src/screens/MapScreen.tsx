import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import useLocation from '@hooks/useLocation.tsx';
import PlusButton from '@components/common/button/PlusButton.tsx';

const MapScreen = () => {
  const location = useLocation();
  return (
    <View style={{flex: 1, width: '100%'}}>
      {location && (
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
          {/*<Marker*/}
          {/*  coordinate={{latitude: 37.78825, longitude: -122.4324}}*/}
          {/*  title="this is a marker"*/}
          {/*  description="this is a marker example"*/}
          {/*/>*/}
        </MapView>
      )}
      <PlusButton />
    </View>
  );
};

export default MapScreen;
