import PlusButton from '@components/common/button/PlusButton';
import {SafeAreaView} from '@components/custom';
import PotRoundupHeader from '@components/layout/PodRoundupHeader';
import React from 'react';

const RequestPodScreen = () => {
  return (
    <SafeAreaView>
      <PotRoundupHeader />
      <PlusButton />
    </SafeAreaView>
  );
};

export default RequestPodScreen;
