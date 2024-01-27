import {useQuery} from '@tanstack/react-query';
import {getPodRequests} from '@lib/api/pod.ts';

const usePodRequests = () => {
  const {data} = useQuery({
    queryKey: ['podRequests'],
    queryFn: getPodRequests,
  });
  console.log(data);
  return {
    podRequests: data,
  };
};

export default usePodRequests;
