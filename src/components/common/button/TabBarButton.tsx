import Typography from '@components/typography';
import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import styled, {css, useTheme} from 'styled-components/native';

interface Props {
  text: string;
  active: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const TabBarButton = ({text, active, onPress}: Props) => {
  const {colors} = useTheme();
  return (
    <StyledPressable $active={active} onPress={onPress}>
      <Typography.Body $emphasized $color={colors.gray.body}>
        {text}
      </Typography.Body>
    </StyledPressable>
  );
};

export default TabBarButton;

const StyledPressable = styled(TouchableOpacity)<{
  $active: boolean;
}>`
  box-sizing: border-box;
  padding: 4px 12px;
  border: 0px solid black;
  ${({$active}) =>
    $active &&
    css`
      border-bottom-width: 3px;
    `}
`;
