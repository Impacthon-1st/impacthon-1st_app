import {SafeAreaView} from '@components/custom';
import PotRoundupHeader from '@components/layout/PotRoundupHeader';
import React from 'react';
import {Text} from 'react-native';

const FindPotScreen = () => {
  return (
    <SafeAreaView>
      <PotRoundupHeader />
      <Text>Find Pot Screen</Text>
    </SafeAreaView>
  );
};

export default FindPotScreen;
