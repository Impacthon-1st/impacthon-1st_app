import {Column, Wrapper} from '@components/atomic';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, useWindowDimensions} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface Props {
  children?: React.ReactNode;
}

const BottomSheetScreen = ({children}: Props) => {
  const [active, setActive] = useState(false);
  const {bottom} = useSafeAreaInsets();
  const animation = useRef(new Animated.Value(0)).current;
  const {height} = useWindowDimensions();
  const openHeight = height * 0.85 + bottom;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: active ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [active, animation]);
  return (
    <Column>
      <Container
        style={[
          {
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [60 + bottom, openHeight],
            }),
          },
        ]}>
        <FlingGestureHandler
          /* eslint-disable-next-line no-bitwise */
          direction={Directions.UP | Directions.DOWN}
          onHandlerStateChange={({nativeEvent}) => {
            if (nativeEvent.state === State.ACTIVE) {
              setActive(!active);
            }
          }}>
          <Wrapper $padding={[8, 0]} $fill>
            <Handle />
          </Wrapper>
        </FlingGestureHandler>
        {children}
      </Container>
    </Column>
  );
};

const Handle = styled.View`
  width: 40px;
  height: 4px;
  align-self: center;
  background-color: #e8e8e8;
  border-radius: 100px;
`;

const Container = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  border-radius: 24px 24px 0 0;
  background-color: ${props => props.theme.colors.gray.background};
  width: 100%;
`;

export default BottomSheetScreen;
