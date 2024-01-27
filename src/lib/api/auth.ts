import {defaultClient} from '@lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (id: string, password: string) => {
  try {
    await defaultClient
      .post('auth/login', {
        accountId: id,
        password: password,
      })
      .then(res => {
        AsyncStorage.setItem('access', res.data.accessTokn);
      });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const LogIn = async (id: string, password: string) => {
  // const setUser = useSetRecoilState(userAtom);

  try {
    defaultClient
      .post('auth/login', {
        user_id: id,
        user_pw: password,
      })
      .then(res => {
        AsyncStorage.setItem('access', res.data.accessToken);
        console.log(res.data.accessToken);
      })
      .catch(err => {
        throw new Error(err);
      });
  } catch (e: any) {
    console.error(e.message);
  }
};
