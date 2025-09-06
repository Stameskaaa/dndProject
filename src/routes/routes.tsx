import { MainPage } from '../pages/main/MainPage';
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
import { WorldsPage } from '@/pages/universe/worlds/WorldsPage';
import { ClubRulesPage } from '@/pages/rules/clubRules/ClubRulesPage';
import { HomeRulesPage } from '@/pages/rules/homeRules/HomeRules';
import { DnDRules } from '@/pages/rules/dndRules/DnDRules';
import { BestiaryPage } from '@/pages/universe/bestiary/BestiaryPage';
import { RaidBossesPage } from '@/pages/universe/raidbosses/RadiBossesPage';
import { NPCPage } from '@/pages/universe/npcs/NPCsPage';

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
        title: 'Вселенная',
        path: 'universe',
        fullPath: '/universe',
        element: <Outlet />,
        loader: true,
        src: 'https://sun9-29.userapi.com/s/v1/ig2/W5VMwVk-5lnf0EG7H-4fMcV2VIWqF-G6Dctu1ADv24pTaWLnSg6UcFCITu-bZQpYcM0aWGbIOWTcbQoIeNxUslVH.jpg?quality=95&as=32x38,48x57,72x86,108x129,160x191,240x287,360x430,480x574,540x645,640x765,720x860,1080x1290,1170x1398&from=bu&cs=1170x0',
        children: [
          {
            title: 'Миры',
            path: 'worlds',
            fullPath: '/universe/worlds',
            element: <WorldsPage />,
          },
          {
            title: 'Локации',
            path: 'locations',
            fullPath: '/universe/locations',
            element: <WorldsPage />,
          },
          {
            title: 'Личности',
            path: 'npcs',
            fullPath: '/universe/npcs',
            element: <NPCPage />,
          },
          {
            title: 'Бестиарий',
            path: 'bestiary',
            fullPath: '/universe/bestiary',
            element: <BestiaryPage />,
          },
          {
            title: 'Рейдбоссы',
            path: 'raidbosses',
            fullPath: '/universe/raidbosses',
            element: <RaidBossesPage />,
          },
        ],
      },
      {
        title: 'Персонаж',
        path: 'character',
        id: 'character',
        fullPath: '/character',
        src: 'https://sun9-44.userapi.com/s/v1/ig2/Cmd1CC138WveJUjSujFu0BOd3M8Y6U4BL8X5DoW4PLKEe0cirjt7Y3clUV05VdrHyVeXcl9rYay5FF7YIKbFumLz.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,960x960&from=bu&cs=960x0',
        element: <Outlet />,
        loader: true,
        children: [
          {
            title: 'Классы',
            path: 'classes',
            fullPath: '/character/classes',
            element: <ClassesPage />,
            src: 'https://cdnb.artstation.com/p/assets/images/images/047/200/669/large/anato-finnstark-web-petit.jpg?1647002974',
            children: [
              {
                path: ':id',
                fullPath: '/character/classes/:id',
                element: <ClassesPage />,
                ignoreInActive: true,
              },
            ],
          },
          {
            title: 'Виды',
            path: 'races',
            fullPath: '/character/races',
            src: 'https://cdnb.artstation.com/p/assets/images/images/041/500/289/large/anato-finnstark-web-peit.jpg?1631867384',
            element: <RacesPage />,
            children: [
              {
                path: ':id',
                fullPath: '/character/races/:id',
                element: <RaceCharacterPage />,
                ignoreInActive: true,
              },
            ],
          },
          {
            title: 'Происхождения',
            path: 'origins',
            fullPath: '/character/origins',
            element: <OriginPage />,
            src: 'https://cdna.artstation.com/p/assets/images/images/036/497/596/4k/pablo-del-molino-thegate02.jpg?1617824920',
            children: [
              {
                path: ':id',
                fullPath: '/character/origins/:id',
                element: <OriginPage />,
                ignoreInActive: true,
              },
            ],
          },
          {
            title: 'Черты',
            path: 'traits',
            fullPath: '/character/traits',
            src: 'https://cdnb.artstation.com/p/assets/images/images/044/018/107/large/anato-finnstark-anato-finnstark-web-petit.jpg?1638889244',
            element: <TraitsPage />,
            children: [
              {
                path: ':id',
                fullPath: '/character/traits/:id',
                element: <TraitsPage />,
                ignoreInActive: true,
              },
            ],
          },
          {
            title: 'Заклинания',
            path: 'spells',
            fullPath: '/character/spells',
            src: 'https://cdnb.artstation.com/p/assets/images/images/034/041/739/4k/anato-finnstark-web-petit.jpg?1611241472',
            element: <SpellsPage />,
            children: [
              {
                path: ':id',
                fullPath: '/character/spells/:id',
                element: <SpellsPage />,
                ignoreInActive: true,
              },
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
            element: <ClubRulesPage />,
            children: [{ path: ':id', fullPath: '/resources/rules/:id' }],
          },
          {
            title: 'Правила D&D',
            path: 'dnd-rules',
            fullPath: '/resources/dnd-rules',
            element: <DnDRules />,
            loader: true,
          },
          {
            title: 'Домашние правила',
            path: 'home-rules',
            fullPath: '/resources/home-rules',
            children: [{ path: ':id', fullPath: '/resources/home-rules/:id' }],
            element: <HomeRulesPage />,
            loader: true,
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
