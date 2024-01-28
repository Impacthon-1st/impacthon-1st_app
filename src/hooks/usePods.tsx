import {useQuery} from '@tanstack/react-query';
import {getPods} from '@lib/api/pod.ts';

const usePods = () => {
  const {data, refetch} = useQuery({
    queryKey: ['pods'],
    queryFn: getPods,
  });
  return {
    pods: data?.partyList,
    refetch,
  };
};
export default usePods;
