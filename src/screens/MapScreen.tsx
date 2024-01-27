import PlusButton from '@components/common/button/PlusButton.tsx';
import useLocation from '@hooks/useLocation.tsx';
import React, {Suspense} from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import usePods from '@hooks/usePods.tsx';
import CustomMarker from '@components/common/CustomMarker.tsx';

const data = [
  {
    id: 1,
    name: '판교 구름스퀘어',
    latitude: 37.395,
    longitude: 127.108,
  },
  {
    id: 2,
    name: '판교 푸르지오',
    latitude: 37.393,
    longitude: 127.108,
  },
  {
    id: 3,
    name: '판교 힐스테이트',
    latitude: 37.394,
    longitude: 127.11,
  },
];

const MapScreen = () => {
  const location = useLocation();
  const {pods} = usePods();
  return (
    <View style={{flex: 1, width: '100%'}}>
      {location && (
        // <Suspense fallback={<View />}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          onPoiClick={e => console.log(e.nativeEvent)}>
          {pods?.map((pod: any) => (
            <Marker
              key={pod.partyId}
              coordinate={{
                latitude: pod.visitPlaceYPoint,
                longitude: pod.visitPlaceXPoint,
              }}>
              <CustomMarker url={pod.profileImageUrl} />
            </Marker>
          ))}
        </MapView>
        // </Suspense>
      )}
      <PlusButton />
    </View>
  );
};

export default MapScreen;
