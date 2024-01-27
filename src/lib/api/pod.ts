import {defaultClient} from '@lib/client';

export const getPods = async () => {
  const response = await defaultClient.get('/parties');
  return response.data;
};
