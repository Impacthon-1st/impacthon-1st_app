import {Row} from '@components/atomic';
import Typography from '@components/typography';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

interface TextButtonProps {
  buttonPosition: 'left' | 'right';
  svgXml: string;
  onPress: () => void;
  text: string;
}

const TextButton = ({
  buttonPosition,
  svgXml,
  onPress,
  text,
}: TextButtonProps) => {
  const {colors} = useTheme();
  return (
    <Row $gap={4} $alignItems="center">
      {buttonPosition === 'left' && (
        <TouchableOpacity onPress={onPress}>
          <SvgXml xml={svgXml} />
        </TouchableOpacity>
      )}
      <Typography.Content $color={colors.gray.body}>{text}</Typography.Content>
      {buttonPosition === 'right' && (
        <TouchableOpacity onPress={onPress}>
          <SvgXml xml={svgXml} />
        </TouchableOpacity>
      )}
    </Row>
  );
};

export default TextButton;
