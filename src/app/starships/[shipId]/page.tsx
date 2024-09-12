import { Starship } from '@/app/interfaces/starship';
import StarShipView from '@/app/Layout/StarShipView';
import { fetchStarship } from '@/app/services/fetchOneShip';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: { shipId: string };
}): Promise<Metadata> {
  const { shipId } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['starship', shipId],
    queryFn: () => fetchStarship(shipId),
  });

  const data: Starship | undefined = queryClient.getQueryData([
    'starship',
    shipId,
  ]);

  return {
    title: data?.name,
    description: data?.model,
  };
}

const ViewShip = async ({ params }: { params: { shipId: string } }) => {
  const { shipId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['starship', shipId],
    queryFn: () => fetchStarship(shipId),
  });

  return (
    <div className=" min-h-screen p-16 flex flex-col justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StarShipView id={shipId} />
      </HydrationBoundary>
    </div>
  );
};

export default ViewShip;
