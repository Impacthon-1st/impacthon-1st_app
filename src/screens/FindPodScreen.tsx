import PlusButton from '@components/common/button/PlusButton';
import {SafeAreaView} from '@components/custom';
import PotRoundupHeader from '@components/layout/PodRoundupHeader';
import React from 'react';
import {Text} from 'react-native';

const FindPodScreen = () => {
  return (
    <SafeAreaView>
      <PotRoundupHeader />
      <Text>Find Pod Screen</Text>
      <PlusButton />
    </SafeAreaView>
  );
};

export default FindPodScreen;
