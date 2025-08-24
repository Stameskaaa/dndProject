import { configureStore } from '@reduxjs/toolkit';
import { racesApi } from '@/features/races/api';
import { classesApi } from '@/features/classes/api';
import scrollLockReducer from '@/features/scroll/scrollSlice';
import pageTransitionReducer from '@/features/pageTransition/pageTransitionSlice';

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    scrollLock: scrollLockReducer,
    pageTransition: pageTransitionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(racesApi.middleware).concat(classesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
