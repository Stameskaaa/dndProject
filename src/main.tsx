import { StrictMode } from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { baseStore } from './store/baseStore.ts';

type BaseStoreType = typeof baseStore;
export const RootStoreContext = createContext<{ baseStore: BaseStoreType }>({ baseStore });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootStoreContext.Provider value={{ baseStore }}>
      <App />
    </RootStoreContext.Provider>
  </StrictMode>,
);
