import {defaultClient} from '@lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (id: string, password: string) => {
  const response = await defaultClient.post('/users/login', {
    accountId: id,
    password: password,
  });
  console.log(response.data);
  await AsyncStorage.setItem('access', response.data.accessToken);
};
