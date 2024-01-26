import React from 'react';
import Typography from '@components/typography';
import SafeAreaView from '@components/SafeArea.tsx';

const TestScreen = () => {
  return (
    <SafeAreaView>
      <Typography.Title $color={'red'}>Test</Typography.Title>
    </SafeAreaView>
  );
};

export default TestScreen;
