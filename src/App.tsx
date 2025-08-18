import './App.css';
import { routes } from './routes/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { renderRoutes } from './routes/helpers';
import { Layout } from './components/layout/Layout';
import { ScrollLockWatcher } from './features/scroll/ScrollLockWatcher';

function App() {
  return (
    <BrowserRouter>
      <ScrollLockWatcher />
      <Routes>
        <Route element={<Layout />}>{renderRoutes(routes)}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
