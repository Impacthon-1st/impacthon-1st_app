import Typography from '@components/typography';
import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Pressable} from '@components/custom';

interface DoubleCTAProps {
  onPress?: {
    primary?: () => void;
    secondary?: () => void;
  };
  text?: {
    primary?: string;
    secondary?: string;
  };
  disabled?: {
    primary?: boolean;
    secondary?: boolean;
  };
}

const DoubleCTA = ({onPress, text, disabled}: DoubleCTAProps) => {
  const {colors} = useTheme();
  return (
    <Wrapper>
      <Container>
        <Button
          onPress={onPress?.secondary}
          disabled={disabled?.secondary}
          color={{
            default: colors.secondary.default,
            active: colors.secondary.active,
            disabled: colors.secondary.default,
          }}>
          <Typography.Body
            $color={
              !disabled?.secondary ? colors.gray.subBody : colors.gray.disabled
            }
            $emphasized>
            {text?.secondary}
          </Typography.Body>
        </Button>
        <Button onPress={onPress?.primary} disabled={disabled?.primary}>
          <Typography.Body $color={'white'} $emphasized>
            {text?.primary}
          </Typography.Body>
        </Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Button = styled(Pressable)`
  padding: 14px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default DoubleCTA;
