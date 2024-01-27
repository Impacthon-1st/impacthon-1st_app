import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {PressableProps} from 'react-native';

interface Color {
  default: string;
  active: string;
  disabled: string;
}

interface Props extends PressableProps {
  children: React.ReactNode;
  color?: Color;
}

const Pressable = ({children, color, ...props}: Props) => {
  const [pressed, setPressed] = useState(false);
  const {colors} = useTheme();
  const {disabled} = props;
  color = color || {...colors.primary, disabled: colors.gray.solid};
  const backgroundColor = !disabled
    ? !pressed
      ? color.default
      : color.active
    : color.disabled;
  return (
    <Container
      onPressIn={e => {
        props.onPressIn && props.onPressIn(e);
        setPressed(true);
      }}
      onPressOut={e => {
        props.onPressOut && props.onPressOut(e);
        setPressed(false);
      }}
      {...props}
      $background={backgroundColor}>
      {children}
    </Container>
  );
};

const Container = styled.Pressable<{$background: string}>`
  background-color: ${props => props.$background};
`;

export default Pressable;
