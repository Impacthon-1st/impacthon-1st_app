import React from 'react';
import {SafeAreaView} from '@components/custom';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import {Header} from '@components/layout';

const TripScreen = () => {
  return (
    // <SafeAreaView>
    //   <Header title="여행" />
    <View style={{flex: 1, width: '100%'}}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>
    </View>
    // </SafeAreaView>
  );
};

export default TripScreen;
