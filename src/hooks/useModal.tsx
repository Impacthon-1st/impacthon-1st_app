import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Column, Row} from '@components/atomic';
import Typography from '@components/typography';
import {Pressable} from '@components/custom';

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
      visible ? (
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
      ) : null,
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
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

export default useModal;
