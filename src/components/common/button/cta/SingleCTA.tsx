import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Typography from '@components/typography';
import {Pressable} from '@components/custom';

interface SingleCTAProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
}

const CTAButton = ({onPress, text, disabled}: SingleCTAProps) => {
  const {colors} = useTheme();
  return (
    <Wrapper>
      <Container
        onPress={() => onPress}
        disabled={disabled}
        color={{
          default: colors.primary.default,
          active: colors.primary.active,
          disabled: colors.primary.active,
        }}>
        <Typography.Body $color={'white'}>{text}</Typography.Body>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const Container = styled(Pressable)`
  padding: 14px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default CTAButton;
