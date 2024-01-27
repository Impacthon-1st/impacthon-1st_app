import React, {useState} from 'react';
import {SafeAreaView} from '@components/custom';
import Switch from '@components/common/input/Switch.tsx';
import Button from '@components/common/button/Button.tsx';
import {useTheme} from 'styled-components/native';
import Header from '@components/layout/Header.tsx';
import useModal from '@hooks/useModal.tsx';
import {DoubleCTA, SingleCTA} from '@components/common/button/cta';
import {Spacer, Text} from '@components/atomic';
import {TextField} from '@components/common/input';

const TestScreen = () => {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState('');
  const {colors} = useTheme();
  const {Modal, open} = useModal({
    title: 'asdsssf',
    content: 'asdf',
    onConfirm: () => {},
    onCancel: () => {},
  });
  return (
    <>
      <SafeAreaView>
        <Header
          title={'Test'}
          shoBack={true}
          onBack={() => {
            console.log('asdf');
          }}
        />
        <Button
          onPress={() => {
            open();
          }}
          text={'asdfsd'}
          // color={colors.}
        />
        <Button text={'asdfsd'} option={'secondary'} />
        <Switch value={enabled} onChange={() => setEnabled(!enabled)} />
        <SingleCTA
          text={'CTA Button'}
          // disabled={true}
          onPress={() => console.log('single CTA')}
        />
        <Spacer $height={20} />
        <DoubleCTA
          text={{
            primary: 'primary',
            secondary: 'secondary',
          }}
          onPress={{
            primary: () => {
              console.log('primary');
            },
            secondary: () => {
              console.log('secondary');
            },
          }}
        />
        <TextField
          value={value}
          onChange={setValue}
          placeholder={'입력해 ㅇㅅㄱ야'}
          label={'라벨'}
          required
          description={'설명'}
        />
        <Text $lineHeight={30}>{value}</Text>
        {/*</Column>*/}
      </SafeAreaView>
      <Modal />
    </>
  );
};

export default TestScreen;
