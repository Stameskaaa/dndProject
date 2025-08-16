import { racesApi } from '@/features/races/api';
import scrollLockReducer from '@/features/scroll/scrollSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
    scrollLock: scrollLockReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(racesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
