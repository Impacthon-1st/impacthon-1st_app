import React, {Dispatch, SetStateAction, useRef} from 'react';
import {Animated, Pressable} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

interface SwitchProps {
  value: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

const Switch = ({value, onChange, disabled}: SwitchProps) => {
  const {colors} = useTheme();
  const positionAnimation = useRef(new Animated.ValueXY()).current;
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const rightAnimation = useRef(new Animated.Value(0)).current;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;
  return (
    <Container
      $enabled={value}
      onPressIn={() => {
        Animated.parallel([
          Animated.timing(widthAnimation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: false,
          }),
          Animated.timing(rightAnimation, {
            toValue: value ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
          }),
        ]).start();
      }}
      onPressOut={() => {
        onChange(!value);
        Animated.parallel([
          Animated.timing(positionAnimation, {
            toValue: {
              x: value ? 0 : 24,
              y: 0,
            },
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(backgroundAnimation, {
            toValue: value ? 0 : 1,
            delay: 50,
            duration: 150,
            useNativeDriver: false,
          }),
          Animated.timing(widthAnimation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false,
          }),
          Animated.timing(rightAnimation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false,
          }),
        ]).start();
      }}
      onPress={() => {}}
      disabled={disabled}
      style={{
        backgroundColor: backgroundAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [colors.gray.solid, colors.primary.default],
          extrapolate: 'clamp',
        }),
      }}>
      <Circle
        style={[
          {transform: [{translateX: positionAnimation.x}]},
          {
            width: widthAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 24],
              extrapolate: 'clamp',
            }),
            right: rightAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 6],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </Container>
  );
};
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Container = styled(AnimatedPressable)<{$enabled: boolean}>`
  width: 50px;
  height: 26px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  border-radius: 24px;
`;

const Circle = styled(Animated.View)<{width?: number}>`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background-color: white;
`;

export default Switch;
