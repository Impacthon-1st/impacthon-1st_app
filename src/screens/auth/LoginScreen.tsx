import React from 'react';
import {SafeAreaView} from '@components/custom';
import {Header, Title} from '@components/layout';
import {TextField} from '@components/common/input';
import CTAButton from '@components/common/button/cta/SingleCTA.tsx';
import {login} from '@lib/api/auth.ts';
import {useNavigation} from '@react-navigation/native';
import {Wrapper} from '@components/atomic';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView>
      <Header title={'로그인'} />
      <Title
        title={'기본 정보을 알려주세요!'}
        description={'앱 내 기능을 더욱 간편하게 사용할 수 있어요.'}
      />
      <TextField
        value={id}
        onChange={setId}
        label={'아이디'}
        placeholder={'아이디'}
      />
      <TextField
        value={password}
        onChange={setPassword}
        label={'비밀번호'}
        placeholder={'비밀번호'}
        isSecure={true}
      />
      <Wrapper $padding={[14, 0]} $fill>
        <CTAButton
          text={'로그인'}
          disabled={id === '' || password === ''}
          onPress={() => {
            login(id, password).then(() => {
              navigation.navigate('Main');
            });
          }}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default LoginScreen;
