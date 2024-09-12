import StarShips from './Layout/StarShips';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchStarships } from './services/fetchStarships';

export default async function Home() {
  const page = 1;
  const search = '';
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['starships', page, search],
    queryFn: () => fetchStarships({ page, search }),
  });

  return (
    <div className=" min-h-screen pb-4 flex flex-col items-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StarShips />
      </HydrationBoundary>
    </div>
  );
}
