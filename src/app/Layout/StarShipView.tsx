'use client';
import React from 'react';
import DetailsCard from '../components/DetailsCard/DetailsCard';

import { useGetStarship } from '../hooks/starships/useGetStarship';
import BackButton from '../components/BackButton/BackButton';
import Loading from '../components/Loading/Loading';
import ErrorComponent from '../components/Error/ErrorComponent';

const StarShipView = ({ id }: { id: string }) => {
  const { data, isLoading, isError, isSuccess, error } = useGetStarship(id);
  if (isLoading) return <Loading />;
  if (isError) return <ErrorComponent message={error.message} />;

  if (isSuccess)
    return (
      <>
        <BackButton />
        <DetailsCard {...data} />
      </>
    );
};

export default StarShipView;
