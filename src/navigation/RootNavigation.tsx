import {AuthNavigation} from '@navigation';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '@screens/MainScreen.tsx';
import MapScreen from '@screens/MapScreen.tsx';
import TestScreen from '@screens/TestScreen';
import CreatePodScreen from '@screens/pod/CreatePodScreen.tsx';
import React, {useEffect} from 'react';
import PodRoundupNavigation from './PodRoundupNavigation';
import styled, {useTheme} from 'styled-components/native';
import {Column, Row} from '@components/atomic';
import Typography from '@components/typography';
import {Pressable} from '@components/custom';
import {useAtom, useAtomValue} from 'jotai';
import {modalPropsAtom, modalVisibleAtom} from '@hooks/useModal.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const modalProps = useAtomValue(modalPropsAtom);
  const [modalVisible, setModalVisible] = useAtom(modalVisibleAtom);
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <>
      <Stack.Navigator
        initialRouteName={'Auth'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={'Main'}
          component={MainScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={'Auth'}
          component={AuthNavigation}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={'Test'}
          component={TestScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={'PotRoundup'}
          component={PodRoundupNavigation}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name={'MapScreen'} component={MapScreen} />
        <Stack.Screen name={'CreatePodScreen'} component={CreatePodScreen} />
      </Stack.Navigator>
      {/*{modalVisible && (*/}
      {/*  <Modal*/}
      {/*    title={modalProps.title}*/}
      {/*    content={modalProps.content}*/}
      {/*    onConfirm={() => {*/}
      {/*      modalProps.onConfirm?.();*/}
      {/*      setModalVisible(false);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
};

interface ModalProps {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal = ({title, content, onConfirm, onCancel}: ModalProps) => {
  const {colors} = useTheme();
  return (
    <Overlay onPress={onCancel}>
      <Container>
        <Column $gap={4}>
          <Typography.Headline $color={colors.gray.body}>
            {title}
          </Typography.Headline>
          <Typography.Body $color={colors.gray.body}>{content}</Typography.Body>
        </Column>
        <Row $gap={8}>
          <Button
            color={{
              default: colors.secondary.default,
              active: colors.secondary.active,
              disabled: '',
            }}
            onPress={onCancel}>
            <Typography.Body $color={colors.gray.subBody} $emphasized>
              취소
            </Typography.Body>
          </Button>
          <Button onPress={onConfirm}>
            <Typography.Body $color={'white'} $emphasized>
              확인
            </Typography.Body>
          </Button>
        </Row>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.Pressable`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: rgba(24, 25, 27, 0.7);
  padding: 30px;
`;

const Container = styled.View`
  width: 100%;
  gap: 26px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.gray.background};
  padding: 24px;
`;

const Button = styled(Pressable)`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 12px;
`;

export default RootNavigation;
