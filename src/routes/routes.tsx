import { MainPage } from '../pages/main/MainPage';
import { CharacterPage } from '@/pages/character/CharacterPage';
import { createBrowserRouter, Outlet, type RouteObject } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { delayLoader } from './helpers';
import { SHOW_TRANSITION } from '@/features/pageTransition/constants';
import type { ReactNode } from 'react';
import { ClassesPage } from '@/pages/character/classes/ClassesPage';
import { RacesPage } from '@/pages/character/races/RacesPage';
import { RaceCharacterPage } from '@/pages/character/races/components/raceCharacter/RaceCharacterPage';
import { OriginPage } from '@/pages/character/origin/OriginPage';
import { TraitsPage } from '@/pages/character/traits/TraitsPage';
import { SpellsPage } from '@/pages/character/spells/SpellsPage';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';

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
  },
  {
    title: 'Миры',
    content: [{ title: 'Долина Гурван-Гол', href: '/worlds/gurvan-gol' }],
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
  },
];

export const routesWrapper = (routes: RouteNode[]): RouteObject[] => {
  return routes.map((node) => {
    const children = node.children ? routesWrapper(node.children) : undefined;

    return {
      path: node.path,
      element: node.element,
      loader: node.loader ? delayLoader(SHOW_TRANSITION * 1000) : undefined,
      children,
    };
  });
};

export type RouteNode = {
  id?: string;
  title?: string;
  path?: string;
  fullPath: string;
  element?: ReactNode;
  children?: RouteNode[];
  loader?: boolean;
  src?: string;
  ignoreInActive?: boolean;
  navigationIngore?: boolean;
};

const LAYOUT: RouteNode = {
  title: 'Главная',
  path: '',
  fullPath: '',
  element: <Layout key="layout" />,
};

//  TODO errorElement

export const HEADER_DISABLED_IDS = ['not-found'];

// TODO для каждой вложенности добавить NOT FOUND
export const ROUTES: RouteNode[] = [
  {
    ...LAYOUT,
    children: [
      {
        title: 'Главная',
        path: '',
        fullPath: '/',
        element: <Outlet />,
        loader: true,
        src: 'https://sun9-44.userapi.com/s/v1/ig2/Cmd1CC138WveJUjSujFu0BOd3M8Y6U4BL8X5DoW4PLKEe0cirjt7Y3clUV05VdrHyVeXcl9rYay5FF7YIKbFumLz.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,960x960&from=bu&cs=960x0',
        children: [
          {
            title: 'Главная',
            path: '/',
            fullPath: '/',
            element: <MainPage key="mainpage" />,
            loader: true,
          },
          {
            title: 'Мероприятия',
            path: 'events',
            fullPath: '/events',
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Мероприятия</Text>
              </Section>
            ),
            loader: true,
          },
          {
            title: 'Новым игрокам',
            path: 'newbies',
            fullPath: '/newbies',
            loader: true,
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Новым игрокам</Text>
              </Section>
            ),
            children: [
              {
                title: 'Полезно знать',
                path: 'guide',
                fullPath: '/newbies/guide',
                element: (
                  <Section paddingY="medium" fixedWidth screen>
                    <Text>Полезно знать</Text>
                  </Section>
                ),
              },
              {
                title: 'Как начать играть',
                path: 'start',
                fullPath: '/newbies/start',
                element: (
                  <Section paddingY="medium" fixedWidth screen>
                    <Text>Как начать играть</Text>
                  </Section>
                ),
              },
            ],
          },
        ],
      },
      {
        title: 'Миры',
        path: 'worlds',
        fullPath: '/worlds',
        element: (
          <Section paddingY="medium" fixedWidth screen>
            <Text>Миры</Text>
          </Section>
        ),
        loader: true,
        src: 'https://sun9-29.userapi.com/s/v1/ig2/W5VMwVk-5lnf0EG7H-4fMcV2VIWqF-G6Dctu1ADv24pTaWLnSg6UcFCITu-bZQpYcM0aWGbIOWTcbQoIeNxUslVH.jpg?quality=95&as=32x38,48x57,72x86,108x129,160x191,240x287,360x430,480x574,540x645,640x765,720x860,1080x1290,1170x1398&from=bu&cs=1170x0',
        children: [
          {
            title: 'Долина Гурван-Гол',
            path: 'gurvan-gol',
            fullPath: '/worlds/gurvan-gol',
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Долина Гурван-Гол</Text>
              </Section>
            ),
            loader: true,
            children: [
              { title: 'История', path: 'history', fullPath: '/worlds/gurvan-gol/history' },
              { title: 'Локации', path: 'locations', fullPath: '/worlds/gurvan-gol/locations' },
              { title: 'Страны', path: 'countries', fullPath: '/worlds/gurvan-gol/countries' },
              { title: 'Личности', path: 'characters', fullPath: '/worlds/gurvan-gol/characters' },
              { title: 'Рейдбоссы', path: 'raidbosses', fullPath: '/worlds/gurvan-gol/raidbosses' },
              { title: 'Бестиарий', path: 'bestiary', fullPath: '/worlds/gurvan-gol/bestiary' },
            ],
          },
        ],
      },
      {
        title: 'Все для игры',
        path: 'resources',
        fullPath: '/resources',
        element: <Outlet />,
        src: 'https://sun9-70.userapi.com/s/v1/ig2/HWXLgbx1js068DVYzg-7aba0KgTDV_MUiQ33hBuCxtYQARbusnBqv2VII2f-VwV5gk_imTS4f8ZtZsoKQpx85gPC.jpg?quality=95&as=32x46,48x69,72x103,108x155,160x229,240x343,360x515,480x687,540x773,640x916,720x1030,1062x1520&from=bu&cs=1062x0',
        children: [
          {
            title: 'Правила клуба',
            path: 'rules',
            fullPath: '/resources/rules',
            loader: true,
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Правила клуба</Text>
              </Section>
            ),
            children: [{ path: ':id', fullPath: '/resources/rules/:id' }],
          },
          {
            title: 'Правила D&D',
            path: 'dnd-rules',
            fullPath: '/resources/dnd-rules',
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Правила D&D</Text>
              </Section>
            ),
            loader: true,
          },
          {
            title: 'Домашние правила',
            path: 'home-rules',
            fullPath: '/resources/home-rules',
            children: [{ path: ':id', fullPath: '/resources/home-rules/:id' }],
            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Домашние правила</Text>
              </Section>
            ),
            loader: true,
          },
          {
            title: 'Персонаж',
            path: 'character',
            id: 'character',
            fullPath: '/resources/character',
            element: <Outlet />,
            loader: true,
            children: [
              {
                path: '',
                fullPath: '/resources/character',
                element: <CharacterPage />,
                navigationIngore: true,
              },
              {
                title: 'Классы',
                path: 'classes',
                fullPath: '/resources/character/classes',
                element: <ClassesPage />,
                children: [
                  {
                    path: ':id',
                    fullPath: '/resources/character/classes/:id',
                    element: <ClassesPage />,
                    ignoreInActive: true,
                  },
                ],
              },
              {
                title: 'Виды',
                path: 'races',
                fullPath: '/resources/character/races',
                element: <RacesPage />,
                children: [
                  {
                    path: ':id',
                    fullPath: '/resources/character/races/:id',
                    element: <RaceCharacterPage />,
                    ignoreInActive: true,
                  },
                ],
              },
              {
                title: 'Происхождения',
                path: 'origins',
                fullPath: '/resources/character/origins',
                element: <OriginPage />,
                children: [
                  {
                    path: ':id',
                    fullPath: '/resources/character/origins/:id',
                    element: <OriginPage />,
                    ignoreInActive: true,
                  },
                ],
              },
              {
                title: 'Черты',
                path: 'traits',
                fullPath: '/resources/character/traits',
                element: <TraitsPage />,
                children: [
                  {
                    path: ':id',
                    fullPath: '/resources/character/traits/:id',
                    element: <TraitsPage />,
                    ignoreInActive: true,
                  },
                ],
              },
              {
                title: 'Заклинания',
                path: 'spells',
                fullPath: '/resources/character/spells',
                element: <SpellsPage />,
                children: [
                  {
                    path: ':id',
                    fullPath: '/resources/character/spells/:id',
                    element: <SpellsPage />,
                    ignoreInActive: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Избранное',
            path: 'favorites',
            fullPath: '/resources/favorites',

            element: (
              <Section paddingY="medium" fixedWidth screen>
                <Text>Избранное</Text>
              </Section>
            ),
            loader: true,
          },
        ],
      },
      {
        id: 'not-found',
        fullPath: '*',
        path: '*',
        element: (
          <Section key="not-found" paddingY="medium" fixedWidth screen>
            <Text>Страница не найдена</Text>
          </Section>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routesWrapper(ROUTES));

// export const authRoutes = createBrowserRouter(ROUTES_AUTH);
