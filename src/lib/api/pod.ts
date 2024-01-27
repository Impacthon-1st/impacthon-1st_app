import {defaultClient} from '@lib/client';
import authClient from '@lib/client/authClient.ts';

export const getPods = async () => {
  const response = await defaultClient.get('/parties');
  return response.data;
};

export const getPodRequests = async () => {
  const response = await authClient.get('/parties/member/requested');
  console.log(response.data);
  return response.data;
};
