import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Pressable} from '@components/custom';
import Typography from '@components/typography';
import FillProps from '@components/icons/types/FillProps.ts';

interface CategoryCardProps {
  category: string;
  Icon: React.FC<FillProps>;
  selected?: boolean;
  big?: boolean;
  onPress?: () => void;
}

const CategoryCard = ({
  category,
  Icon,
  onPress,
  selected,
  big,
}: CategoryCardProps) => {
  const {colors} = useTheme();
  return (
    <Container>
      <IconContainer
        $big={big}
        onPress={onPress}
        color={
          selected
            ? {
                ...colors.primary,
                disabled: '',
              }
            : {
                ...colors.secondary,
                disabled: '',
              }
        }>
        <Icon
          fill={selected ? colors.gray.background : colors.primary.default}
        />
      </IconContainer>
      <Typography.Body $color={colors.gray.body} $emphasized>
        {category}
      </Typography.Body>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const IconContainer = styled(Pressable)<{$big?: boolean}>`
  display: flex;
  border-radius: 24px;
  padding: ${({$big}) => ($big ? '60px' : '24px')};
  flex-direction: column;
  align-items: center;
`;

export default CategoryCard;
