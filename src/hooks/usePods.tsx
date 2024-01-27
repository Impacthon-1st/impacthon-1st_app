import React from 'react';
import {useSuspenseQuery} from '@tanstack/react-query';
import {getPods} from '@lib/api/pod.ts';

const usePods = () => {
  const {data} = useSuspenseQuery({
    queryKey: ['pods'],
    queryFn: getPods,
  });
  return {
    pods: data.partyList,
  };
};
export default usePods;
