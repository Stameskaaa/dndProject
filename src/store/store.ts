import { rulesApi } from './../features/rules/api';
import { originsApi } from './../features/origin/api';
import { configureStore } from '@reduxjs/toolkit';
import { racesApi } from '@/features/races/api';
import { classesApi } from '@/features/classes/api';
import scrollLockReducer from '@/features/scroll/scrollSlice';
import pageTransitionReducer from '@/features/pageTransition/pageTransitionSlice';
import { spellsApi } from '@/features/spells/api';
import { traitsApi } from '@/features/traits/api';
import { newsApi } from '@/features/news/api';
import { characteristicApi } from '@/features/characteristic/api';

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [spellsApi.reducerPath]: spellsApi.reducer,
    [originsApi.reducerPath]: originsApi.reducer,
    [traitsApi.reducerPath]: traitsApi.reducer,
    [rulesApi.reducerPath]: rulesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [characteristicApi.reducerPath]: characteristicApi.reducer,
    scrollLock: scrollLockReducer,
    pageTransition: pageTransitionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(racesApi.middleware)
      .concat(classesApi.middleware)
      .concat(spellsApi.middleware)
      .concat(originsApi.middleware)
      .concat(traitsApi.middleware)
      .concat(rulesApi.middleware)
      .concat(newsApi.middleware)
      .concat(characteristicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
