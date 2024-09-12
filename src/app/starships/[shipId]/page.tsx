import StarShipView from '@/app/Layout/StarShipView';
import { starshipsApi } from '@/app/redux/features/starships/starshipsApi';
import { createServer } from '@/app/redux/store';
import { Metadata } from 'next';

import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: { shipId: string };
}): Promise<Metadata> {
  const { shipId } = params;

  const store = createServer();

  const { data } = await store.dispatch(
    starshipsApi.endpoints.getStarshipById.initiate(shipId)
  );

  return {
    title: data?.name,
    description: data?.model,
  };
}

const ViewShip = async ({ params }: { params: { shipId: string } }) => {
  const { shipId } = params;
  const store = createServer();

  const { data } = await store.dispatch(
    starshipsApi.endpoints.getStarshipById.initiate(shipId)
  );

  return (
    <div className=" min-h-screen p-16 flex flex-col justify-center">
      <StarShipView initialData={data} id={shipId} />
    </div>
  );
};

export default ViewShip;
