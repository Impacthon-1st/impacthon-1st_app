import {Column, Row, Text, Wrapper} from '@components/atomic';
import ProgressBar from '@components/common/progressBar/ProgressBar.tsx';
import {convertDateToProgressGauge} from '@lib/utils/convertDateToProgressGauge.ts';
import BottomSheetScreen from '@screens/BottomSheetScreen.tsx';
import MapScreen from '@screens/MapScreen.tsx';
import React from 'react';
import PodRoundupNavigation from 'src/navigation/PodRoundupNavigation';
import styled, {useTheme} from 'styled-components/native';

const MainScreen = () => {
  const {colors} = useTheme();
  return (
    <>
      <MapScreen />
      <BottomSheetScreen>
        <Wrapper $padding={[0, 20]}>
          <StatusBox>
            <Column $gap={4}>
              <ProfileIcon width={32} height={32} alt="프로필" />
              <Column>
                <Text $weight={600} $lineHeight={26}>
                  유도윤님이 오고 있어요!
                </Text>
                <Row $gap={4} $alignItems="center">
                  <Text
                    $size={14}
                    $color={colors.gray.disabled}
                    $lineHeight={20}>
                    판교 구름스퀘어
                  </Text>
                </Row>
              </Column>
            </Column>
            <Row $padding={[16, 0]} $alignItems="center">
              <ProgressBar
                gauge={convertDateToProgressGauge(
                  '2024-01-27T01:00:00',
                  '2024-01-29T11:00:00',
                )}
              />
            </Row>
          </StatusBox>
        </Wrapper>
        <PodRoundupNavigation />
      </BottomSheetScreen>
    </>
  );
};

const ProfileIcon = styled.Image<{width: number; height: number}>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: 999px;
  border: ${({theme}) => theme.colors.gray.subSolid};
`;

const StatusBox = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  padding: 16px 20px 12px 20px;
  background-color: ${({theme}) => theme.colors.gray.solid};
`;

export default MainScreen;
