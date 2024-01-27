import {Column, Row, Text} from '@components/atomic';
import {SafeAreaView} from '@components/custom';
import React from 'react';
// import {SvgXml} from 'react-native-svg';
import styled, {useTheme} from 'styled-components/native';
// import notification_icon from '@assets/icons/notification_icon.svg';
// import leftArrow_icon from '@assets/icons/leftArrow_icon.svg';
import ProgressBar from '@components/common/progressBar/ProgressBar';
import {convertDateToProgressGauge} from '@lib/utils/convertDateToProgressGauge';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <Contaienr>
        <Row
          $alignItems="center"
          $justifyContent="space-between"
          $padding={[20, 0]}>
          <Text $weight={600}>안녕하세요 이주영님!</Text>
          <Row $alignItems="center" $gap={10}>
            {/* <SvgXml xml={notification_icon} /> */}
            <ProfileIcon src="" width={24} height={24} alt="프로필" />
          </Row>
        </Row>

        <StatusBox>
          <Column $gap={4}>
            <ProfileIcon width={32} height={32} alt="프로필" />

            <Column>
              <Text $weight={600} $lineHeight={26}>
                유도윤님이 오고 있어요!
              </Text>
              <Row $gap={4} $alignItems="center">
                <Text $size={14} $color={colors.gray.disabled} $lineHeight={20}>
                  판교 구름스퀘어
                  {convertDateToProgressGauge(
                    '2024-01-27T01:00:00',
                    '2024-01-29T11:00:00',
                  )}
                </Text>
                {/* <SvgXml xml={leftArrow_icon} /> */}
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
      </Contaienr>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Contaienr = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

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
