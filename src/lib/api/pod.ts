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

export const requestPod = async (podId: number) => {
  await authClient.post(`/parties/${podId}`);
};

export const createTestPod = async () => {
  await authClient.post('/parties', {
    title: 'test',
    meetAt: '2025-01-28T00:28:34.768Z',
    meetPlaceXPoint: 127.03073322772978,
    meetPlaceYPoint: 37.57705722903359,
    meetPlace: 'test',
    count: 3,
    visitPlaceXPoint: 127.03073322772978,
    visitPlaceYPoint: 37.57705722903359,
    visitPlace: 'test',
    content: 'test',
    chatLink: 'test',
  });
  console.log('createTestPod');
};
