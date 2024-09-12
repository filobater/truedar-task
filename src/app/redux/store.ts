import { configureStore } from '@reduxjs/toolkit';
import { starshipsApi } from './features/starships/starshipsApi';

export const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      [starshipsApi.reducerPath]: starshipsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(starshipsApi.middleware),
    preloadedState,
  });
};

export const createServer = () => createStore();
