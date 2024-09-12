import { fetchStarship } from '@/app/services/fetchOneShip';
import { useQuery } from '@tanstack/react-query';

export const useGetStarship = (id: string) => {
  return useQuery({
    queryKey: ['starship', id],
    queryFn: () => fetchStarship(id),
  });
};
