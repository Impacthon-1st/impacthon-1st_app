import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import Typography from '@components/typography';
import Color from '@theme/types/Color';

interface ButtonProps {
  onPress?: () => void;
  text?: string;
  size?: 'small' | 'medium';
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  color?: Color;
}

const Button = ({
  onPress,
  text,
  size = 'medium',
  type = 'primary',
  disabled,
  color,
}: ButtonProps) => {
  const {colors} = useTheme();
  const [pressed, setPressed] = useState(false);
  const Label = size === 'medium' ? Typography.Content : Typography.Caption;
  color = color || colors.blue;
  const backgroundColor = !disabled
    ? type === 'primary'
      ? !pressed
        ? color.default
        : color.active
      : !pressed
      ? color.solid
      : color.solid //TODO 컬러팔래트 변경되면 수정하기
    : colors.gray.solid;
  const labelColor = !disabled
    ? type === 'primary'
      ? 'white'
      : !pressed
      ? color.default
      : color.active
    : colors.gray.body;
  return (
    <Container
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      $background={backgroundColor}>
      <Label $color={labelColor}>{text}</Label>
    </Container>
  );
};

const Container = styled.Pressable<{$background: string}>`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${props => props.$background};
`;

export default Button;
