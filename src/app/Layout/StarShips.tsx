'use client';

import React, { useContext, useState } from 'react';
import Card from '../components/Card/Card';
import PaginationButtons from '../components/PaginationButtons/PaginationButtons';
import { SearchContext } from '../context/SearchContext';
import { useDebounce } from '@uidotdev/usehooks';
import Loading from '../components/Loading/Loading';
// import ErrorComponent from '../components/Error/ErrorComponent';
import { useGetStarshipsQuery } from '../redux/features/starships/starshipsApi';
import { Starship } from '../interfaces/starship';
import ErrorComponent from '../components/Error/ErrorComponent';

const StarShips = ({ initialData }: { initialData: Starship[] }) => {
  const searchCtx = useContext(SearchContext);

  const debouncedSearch = useDebounce(searchCtx?.search, 700);

  const [page, setPage] = useState(1);
  const {
    data = initialData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetStarshipsQuery({
    page,
    search: debouncedSearch,
  });

  if (isLoading) return <Loading />;
  if (isError) {
    if ('status' in error) {
      return <ErrorComponent message={String(error.status)} />;
    } else {
      return <ErrorComponent message={error.message} />;
    }
  }

  if (isSuccess) {
    return (
      <div className="mt-20">
        <h1 className="text-3xl text-center mb-4">StarShips</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-4 px-4">
          {data?.results.map(
            (starship: {
              name: string;
              model: string;
              manufacturer: string;
              url: string;
            }) => {
              const parts = starship.url.split('/');
              const id = parts[parts.length - 2];
              return (
                <Card
                  key={starship.model}
                  name={starship.name}
                  model={starship.model}
                  manufacturer={starship.manufacturer}
                  href={`/starships/${id}`}
                />
              );
            }
          )}
        </div>

        <div className="flex justify-center">
          <PaginationButtons
            hasNext={data?.next}
            hasPrevious={data?.previous}
            onNext={() => setPage((prev) => prev + 1)}
            onPrevious={() => setPage((prev) => prev - 1)}
          />
        </div>
      </div>
    );
  }
};

export default StarShips;
