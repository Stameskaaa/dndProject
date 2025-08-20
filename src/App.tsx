import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { renderRoutes } from './routes/helpers';
import { Layout } from './components/layout/Layout';
import { ScrollLockWatcher } from './features/scroll/ScrollLockWatcher';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <ScrollLockWatcher />
      <Routes>
        <Route element={<Layout />}>{renderRoutes(ROUTES)}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
