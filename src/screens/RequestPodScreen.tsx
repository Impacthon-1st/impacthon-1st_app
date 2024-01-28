import RequestPodItem from '@components/common/pod/RequestPodItem';
import {SafeAreaView} from '@components/custom';
import {Header} from '@components/layout';
import PotRoundupHeader from '@components/layout/PodRoundupHeader';
import React from 'react';
import usePodRequests from '@hooks/usePodRequests.tsx';
import {FlatList} from 'react-native';

const RequestPodScreen = () => {
  const {podRequests, refetch} = usePodRequests();
  console.log(podRequests);
  return (
    <SafeAreaView>
      <Header title="팟모집" />
      <PotRoundupHeader />
      <FlatList
        style={{
          width: '100%',
          height: '100%',
        }}
        onRefresh={refetch}
        refreshing={false}
        data={podRequests}
        renderItem={({item: request}) => (
          <RequestPodItem
            id={request.partyMemberId}
            profile={request.profileImageUrl}
            name={request.username}
          />
        )}
      />
      {/*<PlusButton />*/}
    </SafeAreaView>
  );
};

export default RequestPodScreen;
