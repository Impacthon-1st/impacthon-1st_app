import PlusButton from '@components/common/button/PlusButton';
import RequestPodItem from '@components/common/pod/RequestPodItem';
import {SafeAreaView} from '@components/custom';
import {Header} from '@components/layout';
import PotRoundupHeader from '@components/layout/PodRoundupHeader';
import React from 'react';
import styled from 'styled-components/native';

const REQUEST_PODS_ITEMS = [
  {id: 0, profile: '', name: '박상현'},
  {id: 1, profile: '', name: '이명재'},
  {id: 2, profile: '', name: '길근우'},
];

const RequestPodScreen = () => {
  return (
    <SafeAreaView>
      <Header title="팟모집" />
      <PotRoundupHeader />
      <Container>
        {REQUEST_PODS_ITEMS.map(item => (
          <RequestPodItem {...item} />
        ))}
      </Container>
      <PlusButton />
    </SafeAreaView>
  );
};

export default RequestPodScreen;

const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;
