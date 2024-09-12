import StarShips from './Layout/StarShips';
import { starshipsApi } from './redux/features/starships/starshipsApi';
import { createServer } from './redux/store';

export default async function Home() {
  const page = 1;
  const search = '';

  const store = createServer();

  const { data } = await store.dispatch(
    starshipsApi.endpoints.getStarships.initiate({ page, search })
  );

  return (
    <div className=" min-h-screen pb-4 flex flex-col items-center">
      <StarShips initialData={data} />
    </div>
  );
}
