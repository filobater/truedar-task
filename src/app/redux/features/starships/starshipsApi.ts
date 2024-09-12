const SWAPI_URL = process.env.NEXT_PUBLIC_SWAPI_URL;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starshipsApi = createApi({
  reducerPath: 'starshipsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${SWAPI_URL}` }),
  endpoints: (builder) => ({
    getStarships: builder.query({
      query: ({ page = '1', search }) => {
        const url = new URL('starships/', `${SWAPI_URL}`);
        if (search) {
          url.searchParams.set('search', search);
        } else {
          url.searchParams.set('page', page.toString());
        }
        return url.toString();
      },
    }),
    getStarshipById: builder.query({
      query: (id) => `starships/${id}/`,
    }),
  }),
});

export const { useGetStarshipsQuery, useGetStarshipByIdQuery } = starshipsApi;
