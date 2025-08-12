import { racesApi } from '@/features/races/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(racesApi.middleware),
});
