import {Row, Spacer, Wrapper} from '@components/atomic';
import CategoryCard from '@components/common/CategoryCard.tsx';
import {SingleCTA} from '@components/common/button/cta';
import {TextField} from '@components/common/input';
import {SafeAreaView} from '@components/custom';
import {TablewareIcon} from '@components/icons/category';
import {Header, Title} from '@components/layout';
import {useNavigation} from '@react-navigation/native';
import {atom, useAtom, useAtomValue} from 'jotai';
import React, {useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createTestPod} from '@lib/api/pod.ts';

const stepAtom = atom(1);

const CreatePodScreen = () => {
  const step = useAtomValue(stepAtom);
  return (
    <SafeAreaView>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </SafeAreaView>
  );
};

const Step1 = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useAtom(stepAtom);

  return (
    <>
      <Header shoBack onBack={() => navigation.pop()} />
      <ProgressBar current={step} max={3} />
      <Title title={'팟의 주제를 알려주세요.'} />
      <Row $padding={[0, 20]} $gap={16}>
        <CategoryCard
          big
          category={'관광지 탐방'}
          Icon={TablewareIcon}
          selected={true}
        />
        <CategoryCard big category={'맛집 탐방'} Icon={TablewareIcon} />
      </Row>

      <Spacer $flex={1} />
      <SingleCTA text={'다음'} onPress={() => setStep(2)} />
    </>
  );
};

const Step2 = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [info, setInfo] = useState({
    title: '',
    location: '',
    openChatURL: '',
    description: '',
  });

  return (
    <>
      <Header shoBack onBack={() => setStep(1)} />
      <ProgressBar current={step} max={3} />
      <Title title="팟의 기본 정보를 알려주세요." />
      <TextField
        label="제목"
        value={info.title}
        placeholder="제목을 입력해 주세요."
        onChange={value => setInfo(prev => ({...prev, title: value}))}
      />
      <TextField
        label="장소"
        value={info.location}
        placeholder="장소 찾기"
        onChange={value => setInfo(prev => ({...prev, location: value}))}
      />
      <TextField
        label="오픈 채팅방 URL"
        value={info.openChatURL}
        placeholder="https://www.instagram.com/"
        onChange={value => setInfo(prev => ({...prev, openChatURL: value}))}
      />
      <TextField
        label="설명"
        value={info.description}
        placeholder="입력해 주세요."
        onChange={value => setInfo(prev => ({...prev, description: value}))}
      />
      <Spacer $flex={1} />
      <SingleCTA text={'다음'} onPress={() => setStep(3)} />
    </>
  );
};

const Step3 = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [info, setInfo] = useState({
    personCount: '',
    date: '',
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newPod: any) => createTestPod(),
    onMutate: async () => {
      await queryClient.cancelQueries({queryKey: ['pods']});
      const previousPods = queryClient.getQueryData(['pods']);
      console.log('onMutate');
      queryClient.setQueryData(['pods'], (old: any) => {
        partyMemberList: [
          ...old.partyMemberList,
          {
            partyId: 6,
            visitPlaceName: 'test',
            visitPlaceXPoint: 0.0,
            visitPlaceYPoint: 0.0,
            count: 1,
            partyMemberCount: 5,
            profileImageUrl:
              'https://jobis-store.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202024-01-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.31.13.png',
            username: 'test',
            gender: 'MALE',
            meetAt: '2025-01-28T00:28:35',
            title: 'test',
            content: 'test',
          },
        ];
      });
      return {previousPods};
    },
    onError: (error, newPod, context) => {
      console.log(error);
      queryClient.setQueryData(['pods'], context?.previousPods);
    },
    onSettled: () => {
      console.log('onSettled');
      queryClient?.invalidateQueries({queryKey: ['pods']});
    },
  });
  const navigation = useNavigation<any>();
  return (
    <>
      <Header shoBack onBack={() => setStep(2)} />
      <ProgressBar current={step} max={3} />
      <Title title={'팟의 주제를 알려주세요.'} />
      <TextField
        label="인원수"
        value={info.personCount}
        placeholder="n명"
        onChange={value => setInfo(prev => ({...prev, personCount: value}))}
      />
      <TextField
        label="날짜, 시간"
        value={info.date}
        placeholder="MM.DD.HH.MM"
        onChange={value => setInfo(prev => ({...prev, date: value}))}
      />
      <Spacer $flex={1} />
      <SingleCTA
        text={'다음'}
        onPress={() => {
          // mutation.mutate();
          createTestPod()
            .then(() => {
              console.log('createTestPod');
            })
            .catch(e => {
              console.log(e);
            });
          navigation.pop();
        }}
      />
    </>
  );
};
const ProgressBar = ({current, max}: {current: number; max: number}) => {
  return (
    <Wrapper $padding={[12, 20]} $fill>
      <Container>
        <Progress
          style={[
            {
              width: `${(current / max) * 100}%`,
            },
          ]}
        />
      </Container>
    </Wrapper>
  );
};

const Container = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.gray.subSolid};
`;

const Progress = styled(Animated.View)`
  position: absolute;
  height: 8px;
  background-color: ${props => props.theme.colors.primary.default};
  border-radius: 4px;
`;

export default CreatePodScreen;
