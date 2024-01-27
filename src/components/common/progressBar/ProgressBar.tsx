import React from 'react';
import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  gauge: number;
}

const ProgressBar = (gauge: Props) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: gauge.gauge,
      duration: 500, // 애니메이션 지속 시간 (밀리초)
      easing: Easing.linear, // 애니메이션 가속도 함수
      useNativeDriver: false, // 네이티브 드라이버 사용 여부
    }).start();
  }, [gauge, animatedWidth]);

  return (
    <Container>
      <ProgressGage
        style={{
          width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
        }}
      />
    </Container>
  );
};

export default ProgressBar;

const Container = styled.View`
  width: 100%;
  height: 8px;
  background-color: ${({theme}) => theme.colors.gray.subSolid};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;

const ProgressGage = styled(Animated.View)`
  height: 100%;
  background-color: ${({theme}) => theme.colors.red.default};
  position: absolutess;
  top: 0;
  left: 0;
`;
