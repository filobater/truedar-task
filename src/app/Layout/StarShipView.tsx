'use client';
import React from 'react';
import DetailsCard from '../components/DetailsCard/DetailsCard';

import BackButton from '../components/BackButton/BackButton';
import Loading from '../components/Loading/Loading';
import ErrorComponent from '../components/Error/ErrorComponent';
import { Starship } from '../interfaces/starship';
import { useGetStarshipByIdQuery } from '../redux/features/starships/starshipsApi';

const StarShipView = ({
  id,
  initialData,
}: {
  id: string;
  initialData: Starship;
}) => {
  const {
    data = initialData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetStarshipByIdQuery(id);
  if (isLoading) return <Loading />;
  if (isError) {
    if ('status' in error) {
      return <ErrorComponent message={String(error.status)} />;
    } else {
      return <ErrorComponent message={error.message} />;
    }
  }

  if (isSuccess)
    return (
      <>
        <BackButton />
        <DetailsCard {...data} />
      </>
    );
};

export default StarShipView;
