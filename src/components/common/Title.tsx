import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Typography from '@components/typography';
import {Column} from '@components/atomic';

interface TitleProps {
  title: string;
  description?: string;
}

const Title = ({title, description}: TitleProps) => {
  const {colors} = useTheme();
  return (
    <Wrapper>
      <Column>
        <Typography.Headline $color={colors.gray.body}>
          {title}
        </Typography.Headline>
        {description && (
          <Typography.Content $color={colors.gray.subBody}>
            {description}
          </Typography.Content>
        )}
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 12px 20px;
`;

export default Title;
