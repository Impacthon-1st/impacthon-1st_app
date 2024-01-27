import {Row} from '@components/atomic';
import TabBarButton from '@components/common/button/TabBarButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

interface Props {}

const PotRoundupHeader = ({}: Props) => {
  const route = useRoute();
  const navigation = useNavigation<any>();

  return (
    <Row $gap={10} $padding={[0, 20]}>
      <TabBarButton
        text="팟 찾기"
        active={route.name === 'FindPot'}
        onPress={() => navigation.navigate('FindPot')}
      />
      <TabBarButton
        text="팟 모집"
        active={route.name === 'RequestPot'}
        onPress={() => navigation.navigate('RequestPot')}
      />
    </Row>
  );
};

export default PotRoundupHeader;
