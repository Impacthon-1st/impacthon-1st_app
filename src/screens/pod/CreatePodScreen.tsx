import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Header, Title} from '@components/layout';
import {useNavigation} from '@react-navigation/native';
import {Row, Spacer, Wrapper} from '@components/atomic';
import styled from 'styled-components/native';
import {SingleCTA} from '@components/common/button/cta';
import {SafeAreaView} from '@components/custom';
import CategoryCard from '@components/common/CategoryCard.tsx';
import {TablewareIcon} from '@components/icons/category';
import {atom, useAtom, useAtomValue} from 'jotai';

const stepAtom = atom(1);

const CreatePodScreen = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useAtom(stepAtom);
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
        <CategoryCard big category={'관광지 탐방'} Icon={TablewareIcon} />
        <CategoryCard big category={'맛집 탐방'} Icon={TablewareIcon} />
      </Row>

      <Spacer $flex={1} />
      <SingleCTA text={'다음'} onPress={() => setStep(2)} />
    </>
  );
};

const Step2 = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useAtom(stepAtom);

  return (
    <>
      <Header shoBack onBack={() => navigation.pop()} />
      <ProgressBar current={step} max={3} />
      <Title title={'팟의 주제를 알려주세요.'} />
      <Row $padding={[0, 20]} $gap={16}>
        <CategoryCard big category={'관광지 탐방'} Icon={TablewareIcon} />
        <CategoryCard big category={'맛집 탐방'} Icon={TablewareIcon} />
      </Row>

      <Spacer $flex={1} />
      <SingleCTA text={'다음'} onPress={() => setStep(3)} />
    </>
  );
};

const Step3 = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useAtom(stepAtom);

  return (
    <>
      <Header shoBack onBack={() => navigation.pop()} />
      <ProgressBar current={step} max={3} />
      <Title title={'팟의 주제를 알려주세요.'} />
      <Row $padding={[0, 20]} $gap={16}>
        <CategoryCard big category={'관광지 탐방'} Icon={TablewareIcon} />
        <CategoryCard big category={'맛집 탐방'} Icon={TablewareIcon} />
      </Row>

      <Spacer $flex={1} />
      <SingleCTA text={'다음'} onPress={() => setStep(3)} />
    </>
  );
};

const ProgressBar = ({current, max}: {current: number; max: number}) => {
  const step = useAtomValue(stepAtom);
  const animation = useRef(new Animated.Value(step - 1)).current;
  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: current,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animation, current]);
  return (
    <Wrapper $padding={[12, 20]} $fill>
      <Container>
        <Progress
          style={[
            {
              width: animation.interpolate({
                inputRange: [0, max],
                outputRange: ['0%', '100%'],
              }),
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
