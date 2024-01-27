import PlusButton from '@components/common/button/PlusButton';
import FindPodItem from '@components/common/pod/FindPodItem';
import {SafeAreaView} from '@components/custom';
import {Header} from '@components/layout';
import PotRoundupHeader from '@components/layout/PodRoundupHeader';
import React from 'react';

const FIND_PODS_ITEMS = [
  {
    id: 0,
    profile: '',
    name: '박상현',
    title: '판교 구름 스퀘어 갈 사람??',
    location: '판교 구름 스퀘어',
    max: 80,
    currentPersonCount: 23,
    category: '관광지 탐방',
  },
  {
    id: 1,
    profile: '',
    name: '이명재',
    title: '나랑 더현대 서울 가자!',
    location: '여의도 더현대 서울',
    max: 2,
    currentPersonCount: 1,
    category: '관광지 탐방',
  },
  {
    id: 2,
    profile: '',
    name: '길근우',
    title: '대전엔 성심당이 유명하다며?',
    location: '대전 성심당',
    max: 2,
    currentPersonCount: 1,
    category: '맛집 탐방',
  },
];

const FindPodScreen = () => {
  return (
    <SafeAreaView>
      <Header title="팟모집" />
      <PotRoundupHeader />
      {FIND_PODS_ITEMS.map(item => (
        <FindPodItem {...item} />
      ))}
      <PlusButton />
    </SafeAreaView>
  );
};

export default FindPodScreen;
