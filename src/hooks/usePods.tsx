import React from 'react';
import {useQuery, useSuspenseQuery} from '@tanstack/react-query';
import {getPods} from '@lib/api/pod.ts';

const usePods = () => {
  const {data} = useQuery({
    queryKey: ['pods'],
    queryFn: getPods,
  });
  return {
    pods: data?.partyList,
  };
};
export default usePods;
