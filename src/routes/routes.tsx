import { Outlet } from 'react-router-dom';
import type { RouterConfig } from './helpers';
import { MainPage } from '../pages/main/MainPage';
import { UIPage } from '@/pages/ui/ui';

export const routesAuth: RouterConfig[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/login/recovery',
    element: <div>loginrecovery</div>,
  },
  {
    path: '/registration',
    element: <div>registration</div>,
  },
];

export const routes: RouterConfig[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/club',
    element: (
      <div>
        start
        <Outlet />
      </div>
    ),
    children: [
      {
        path: 'about',
        element: <div>about</div>,
      },
    ],
  },
  {
    path: '/character/classes',
    element: <div>/character/classes </div>,
  },
  {
    path: '/ui',
    element: <UIPage />,
  },
  {
    path: '*',
    element: (
      <>
        <div style={{ height: '100vh' }}>not found </div>
        <div style={{ height: '100vh' }}>not found </div>
      </>
    ),
  },
];
