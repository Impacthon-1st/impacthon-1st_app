import React, {useState} from 'react';
import {Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Column, Row} from '@components/atomic';
import Typography from '@components/typography';

interface ModalProps {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const useModal = ({title, content, onConfirm, onCancel}: ModalProps) => {
  const [visible, setVisible] = useState(false);
  return {
    open: () => setVisible(true),
    Modal: () =>
      visible && (
        <Modal
          title={title}
          content={content}
          onConfirm={() => {
            onConfirm && onConfirm();
            setVisible(false);
          }}
          onCancel={() => {
            onCancel && onCancel();
            setVisible(false);
          }}
        />
      ),
  };
};

//TODO 버튼 스타일링
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
          <TouchableOpacity onPress={onCancel}>
            <Typography.Body $color={colors.gray.body}>취소</Typography.Body>
          </TouchableOpacity>
          <TouchableOpacity onPress={onConfirm}>
            <Typography.Body $color={colors.gray.body}>확인</Typography.Body>
          </TouchableOpacity>
        </Row>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.Pressable`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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

export default useModal;
