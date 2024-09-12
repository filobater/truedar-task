const SWAPI_URL = process.env.NEXT_PUBLIC_SWAPI_URL;

import axios from 'axios';

export async function fetchStarship(id: string) {
  const response = await axios.get(`${SWAPI_URL}/starships/${id}`);
  if (!response.data) {
    throw new Error('Failed to fetch this starship');
  }
  return response.data;
}
