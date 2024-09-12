import { fetchStarships } from '@/app/services/fetchStarships';
import { useQuery } from '@tanstack/react-query';

export const useGetStarships = (page = 1, search = '') => {
  return useQuery({
    queryKey: ['starships', page, search],
    queryFn: () => fetchStarships({ page, search }),
    placeholderData: (previousData) => previousData,
  });
};
