import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {InputModeOptions} from 'react-native';
import Typography from '@components/typography';
import {Row} from '@components/atomic';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  description?: string;
  value: string;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  height?: number;
  inputMode?: InputModeOptions;
  isSecure?: boolean;
  onChange: (value: string) => void;
}

const TextField = ({
  label,
  required,
  placeholder,
  description,
  value,
  onChange,
  isSecure,
  inputMode,
  disabled,
}: TextFieldProps) => {
  const theme = useTheme();
  const textStyles = Typography.Content.inlineStyle.generateStyleObject({
    $color: theme.colors.gray.body,
    theme: theme,
  });
  const [focused, setFocused] = useState(false);
  return (
    <Wrapper>
      <Container>
        {label && (
          <Row $gap={2}>
            <Typography.Content $color={theme.colors.gray.subBody} $emphasized>
              {label}
            </Typography.Content>
            {required && <Required />}
          </Row>
        )}
        <InputContainer
          style={{...textStyles, lineHeight: undefined}}
          $focused={focused}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray.disabled}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isSecure}
          inputMode={inputMode}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          editable={!disabled}
        />
        {description && (
          <Typography.Caption $color={theme.colors.gray.disabled}>
            {description}
          </Typography.Caption>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  padding: 8px 20px;
  //position: relative;
  //z-index: -1;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InputContainer = styled.TextInput<{$focused: boolean}>`
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.gray.solid};
  border: ${props =>
    props.$focused ? `1px solid ${props.theme.colors.gray.subSolid}` : 'none'};
  padding: 16px;
  height: 54px;
`;

const Required = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.primary.default};
`;

export default TextField;
