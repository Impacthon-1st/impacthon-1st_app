import React, {useLayoutEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import Typography from '@components/typography';
import {Pressable} from '@components/custom';
import {Keyboard, KeyboardAvoidingView, Platform} from 'react-native';

interface SingleCTAProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  avoidKeyboard?: boolean;
}

const CTAButton = ({
  onPress,
  text,
  disabled,
  avoidKeyboard = false,
}: SingleCTAProps) => {
  const {colors} = useTheme();
  const [isKeyboard, setIsKeyboard] = useState(false);
  useLayoutEffect(() => {
    const didShow = Keyboard.addListener('keyboardWillShow', () =>
      setIsKeyboard(true),
    );
    const didHide = Keyboard.addListener('keyboardWillHide', () =>
      setIsKeyboard(false),
    );
    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);
  return (
    <KeyboardAvoidingView
      style={{width: '100%'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={avoidKeyboard}>
      <Wrapper $fill={avoidKeyboard && isKeyboard}>
        <Container
          $fill={avoidKeyboard && isKeyboard}
          onPress={onPress}
          disabled={disabled}
          color={{
            default: colors.primary.default,
            active: colors.primary.active,
            disabled: colors.primary.active,
          }}>
          <Typography.Body $color={'white'}>{text}</Typography.Body>
        </Container>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

const Wrapper = styled.View<{$fill?: boolean}>`
  width: 100%;
  padding: 0 ${props => (props.$fill ? 0 : 20)}px;
`;

const Container = styled(Pressable)<{$fill?: boolean}>`
  padding: 14px;
  border-radius: ${props => (props.$fill ? 0 : 12)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default CTAButton;
