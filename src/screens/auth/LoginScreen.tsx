import React from 'react';
import {SafeAreaView} from '@components/custom';
import {Header, Title} from '@components/layout';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Header title={'로그인'} />
      <Title
        title={'기본 정보을 알려주세요!'}
        description={'앱 내 기능을 더욱 간편하게 사용할 수 있어요.'}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
