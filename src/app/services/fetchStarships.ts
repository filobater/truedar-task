const SWAPI_URL = process.env.NEXT_PUBLIC_SWAPI_URL;

import axios from 'axios';

export async function fetchStarships({
  page = 1,
  search = '',
}: {
  page?: number;
  search?: string;
} = {}) {
  const params: { search?: string; page?: number } = {};
  if (search) {
    params.search = search;
  } else {
    params.page = page;
  }

  const response = await axios.get(`${SWAPI_URL}/starships`, { params });
  if (!response.data) {
    throw new Error('Failed to fetch starships');
  }
  return response.data;
}
