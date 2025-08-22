import { MainPage } from '../pages/main/MainPage';
import { CharacterPage } from '@/pages/character/CharacterPage';
import { CHARACTER_NAVIGATION, EVENTS_NAVIGATION, NEW_PLAYER_NAVIGATION } from './nestedRoutes';
import { createBrowserRouter, type NonIndexRouteObject, type RouteObject } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { delayLoader } from './helpers';
import { SHOW_TRANSITION } from '@/features/pageTransition/constants';

export const ROUTES_AUTH: RouteObject[] = [
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
// TODO должны быть реализованы с полем private обернуть дло createBrowserRouter

export const NAVIGATION_ITEMS = [
  {
    title: 'О клубе',
    content: [
      { title: 'Что такое D&D', href: '/about' },
      { title: 'Уникальность клуба', href: '/about/uniqueness' },
      { title: 'Мероприятия', href: '/about/events' },
      { title: 'Для новых игроков', href: '/about/new-players' },
    ],
    src: 'https://sun9-44.userapi.com/s/v1/ig2/Cmd1CC138WveJUjSujFu0BOd3M8Y6U4BL8X5DoW4PLKEe0cirjt7Y3clUV05VdrHyVeXcl9rYay5FF7YIKbFumLz.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,960x960&from=bu&cs=960x0',
  },
  {
    title: 'Миры',
    content: [{ title: 'Долина Гурван-Гол', href: '/worlds/gurvan-gol' }],
    src: 'https://sun9-29.userapi.com/s/v1/ig2/W5VMwVk-5lnf0EG7H-4fMcV2VIWqF-G6Dctu1ADv24pTaWLnSg6UcFCITu-bZQpYcM0aWGbIOWTcbQoIeNxUslVH.jpg?quality=95&as=32x38,48x57,72x86,108x129,160x191,240x287,360x430,480x574,540x645,640x765,720x860,1080x1290,1170x1398&from=bu&cs=1170x0',
  },
  {
    title: 'Всё для игры',
    content: [
      { title: 'Правила клуба', href: '/game/club-rules' },
      { title: 'Правила D&D', href: '/game/dnd-rules' },
      { title: 'Персонаж', href: '/game/character' },
      { title: 'Домашние правила ToH', href: '/game/toh-house-rules' },
      { title: 'Избранное', href: '/game/favorites' },
    ],
    src: 'https://sun9-70.userapi.com/s/v1/ig2/HWXLgbx1js068DVYzg-7aba0KgTDV_MUiQ33hBuCxtYQARbusnBqv2VII2f-VwV5gk_imTS4f8ZtZsoKQpx85gPC.jpg?quality=95&as=32x46,48x69,72x103,108x155,160x229,240x343,360x515,480x687,540x773,640x916,720x1030,1062x1520&from=bu&cs=1062x0',
  },
];

const routesWrapper = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((value) => {
    const loader = delayLoader(SHOW_TRANSITION * 1000);
    if ('index' in value && value.index === true) {
      return { ...value, loader };
    } else {
      const nonIndex = value as NonIndexRouteObject;
      const children = nonIndex.children ? routesWrapper(nonIndex.children) : undefined;
      return { ...nonIndex, children, loader };
    }
  });
};
export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <MainPage /> },

      // ABOUT
      {
        path: 'about',
        element: <div>Что такое D&D</div>,

        children: [
          {
            path: 'uniqueness',
            element: <div>Уникальность клуба</div>,
          },
          { path: 'events', element: <div>Мероприятия</div> },
          {
            path: 'new-players',
            element: <div>Для новых игроков</div>,
          },
          ...NEW_PLAYER_NAVIGATION.map(({ relativePath, element }) => ({
            path: relativePath,
            element,
          })),
        ],
      },

      // WORLDS
      {
        path: 'worlds',
        element: <div>Миры</div>,
        children: [
          {
            path: 'gurvan-gol',
            element: <div>Долина Гурван-Гол</div>,
            children: NEW_PLAYER_NAVIGATION.map(({ relativePath, element }) => ({
              path: relativePath,
              element,
            })),
          },
        ],
      },

      {
        path: 'game/club-rules',
        element: <div>Правила клуба</div>,
      },
      {
        path: 'game/dnd-rules',
        element: <div>Правила D&D</div>,
      },
      { path: 'game/character', element: <CharacterPage /> },
      ...CHARACTER_NAVIGATION.map(({ relativePath, element, children }) => ({
        path: `game/character/${relativePath}`,
        element,
        children,
      })),
      {
        path: 'game/home-rules',
        element: <div>Домашние правила ToH</div>,
      },
      {
        path: 'game/favorites',
        element: <div>Избранное</div>,
      },
    ],
  },

  {
    path: '*',
    element: <div style={{ height: '100vh' }}>not found</div>,
  },
];

export const router = createBrowserRouter(routesWrapper(ROUTES));
// export const authRoutes = createBrowserRouter(ROUTES_AUTH);
