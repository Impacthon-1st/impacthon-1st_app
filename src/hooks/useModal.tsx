import {atom, useSetAtom} from 'jotai';

interface ModalProps {
  title: string;
  content: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const modalPropsAtom = atom<ModalProps>({
  title: '',
  content: '',
  onConfirm: () => {},
  onCancel: () => {},
});

export const modalVisibleAtom = atom(false);

const useModal = (props: ModalProps) => {
  const setModalProps = useSetAtom(modalPropsAtom);
  const setVisible = useSetAtom(modalVisibleAtom);
  setModalProps({...props});
  return {
    open: () => setVisible(true),
  };
};

//TODO 버튼 스타일링

export default useModal;
