import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '@components/typography';

const BottomTabBar = ({state, descriptors, navigation}: any) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Container bottomMargin={bottom}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel;
        const Icon = options.tabBarIcon;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TabItemContainer key={index} onPress={onPress}>
            <Icon focused={isFocused} />
            <Typography.Caption $color={color}>{label}</Typography.Caption>
          </TabItemContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.View<{bottomMargin?: number}>`
  background-color: ${props => props.theme.colors.gray.background};
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: ${props => `${props.bottomMargin || 0}`}px;
`;
const TabItemContainer = styled.Pressable`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
`;

export default BottomTabBar;
