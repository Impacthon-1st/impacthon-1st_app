import React, {Dispatch, SetStateAction, useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Column, Row} from '@components/atomic';
import Typography from '@components/typography';
// @ts-ignore
import DownIcon from '@assets/icons/down.svg';
import {FlatList} from 'react-native';

interface DropdownProps {
  label?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  data: string[];
  placeholder?: string;
  required?: boolean;
}

const Dropdown = ({
  label,
  required,
  value,
  onChange,
  data,
  placeholder,
}: DropdownProps) => {
  const {colors} = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Column $gap={4} $fill>
        {label && (
          <Row $gap={2}>
            <Typography.Content $color={colors.gray.subBody} $emphasized>
              {label}
            </Typography.Content>
            {required && <Required />}
          </Row>
        )}
        <Container onPress={() => setOpen(!open)} $focused={open}>
          {value.length === 0 ? (
            <Typography.Content $color={colors.gray.disabled}>
              {placeholder}
            </Typography.Content>
          ) : (
            <Typography.Content $color={colors.gray.body}>
              {value}
            </Typography.Content>
          )}
          <DownIcon
            fill={colors.gray.disabled}
            style={[
              {
                transform: [{rotate: `${open ? 180 : 0}deg`}],
              },
            ]}
          />
        </Container>
      </Column>
      {open && (
        <Drop>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ItemContainer
                onPress={() => {
                  onChange(item);
                  setOpen(false);
                }}>
                <Typography.Content $color={colors.gray.disabled}>
                  {item}
                </Typography.Content>
                <Typography.Caption $color={colors.gray.disabled}>
                  선택
                </Typography.Caption>
              </ItemContainer>
            )}
          />
        </Drop>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 20px;
  z-index: 100;
`;
const Container = styled.Pressable<{$focused: boolean}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${({theme}) => theme.colors.gray.solid};
  border: ${props =>
    props.$focused ? `1px solid ${props.theme.colors.gray.subSolid}` : 'none'};
`;

const Required = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.primary.default};
`;

const Drop = styled.View`
  position: absolute;
  top: 94px;
  left: 20px;
  width: 100%;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.gray.solid};
  border: 1px solid ${({theme}) => theme.colors.gray.subSolid};
`;

const ItemContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${({theme}) => theme.colors.gray.solid};
`;
export default Dropdown;
