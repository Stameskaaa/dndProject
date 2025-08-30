import type { ReactNode } from 'react';
import { RacesPage } from '@/pages/character/races/RacesPage';
import { OriginPage } from '@/pages/character/origin/OriginPage';
import { SpellsPage } from '@/pages/character/spells/SpellsPage';
import { TraitsPage } from '@/pages/character/traits/TraitsPage';
import { ClassesPage } from '@/pages/character/classes/ClassesPage';
import { RaceCharacterPage } from '@/pages/character/races/components/raceCharacter/RaceCharacterPage';

export interface NestedRoute {
  id: string;
  title: string;
  relativePath: string;
  fullPath: string;
  element: ReactNode;
  parentId?: string | null;
  children?: {
    path: string;
    element: ReactNode;
  }[];
}

export const NEW_PLAYER_NAVIGATION: NestedRoute[] = [
  {
    id: 'useful',
    title: 'Полезно знать',
    relativePath: 'useful',
    fullPath: '/docs/new-players/useful',
    element: <div>useful</div>,
  },
  {
    id: 'how-to-start',
    title: 'Как начать играть',
    relativePath: 'how-to-start',
    fullPath: '/docs/new-players/how-to-start',
    element: <div>useful</div>,
  },
];

export const EVENTS_NAVIGATION: NestedRoute[] = [
  {
    id: 'regular',
    title: 'Регулярные игры',
    relativePath: 'regular',
    fullPath: '/docs/events/regular',
    element: <div>useful</div>,
  },
  {
    id: 'trips',
    title: 'Выезды',
    relativePath: 'trips',
    fullPath: '/docs/events/trips',
    element: <div>useful</div>,
  },
  {
    id: 'campaigns',
    title: 'Кампании',
    relativePath: 'campaigns',
    fullPath: '/docs/events/campaigns',
    element: <div>useful</div>,
  },
  {
    id: 'events',
    title: 'Ивенты',
    relativePath: 'events',
    fullPath: '/docs/events/events',
    element: <div>useful</div>,
  },
  {
    id: 'custom',
    title: 'Заказные игры',
    relativePath: 'custom',
    fullPath: '/docs/events/custom',
    element: <div>useful</div>,
  },
  {
    id: 'one-shots',
    title: 'Ваншоты',
    relativePath: 'one-shots',
    fullPath: '/docs/events/one-shots',
    element: <div>useful</div>,
  },
  {
    id: 'rent',
    title: 'Аренда',
    relativePath: 'rent',
    fullPath: '/docs/events/rent',
    element: <div>useful</div>,
  },
  {
    id: 'roleplays',
    title: 'Отыгрыши',
    relativePath: 'roleplays',
    fullPath: '/docs/events/roleplays',
    element: <div>useful</div>,
  },
];

export const CHARACTER_NAVIGATION: NestedRoute[] = [
  {
    id: 'classes',
    title: 'Классы',
    relativePath: 'classes',
    fullPath: '/game/character/classes',
    element: <ClassesPage />,
    parentId: null,
  },
  {
    id: 'races',
    title: 'Виды',
    relativePath: 'races',
    fullPath: '/game/character/races',
    element: <RacesPage />,
    parentId: null,
    children: [
      {
        path: ':id',
        element: <RaceCharacterPage />,
      },
    ],
  },
  {
    id: 'origins',
    title: 'Происхождения',
    relativePath: 'origins',
    fullPath: '/game/character/origins',
    element: <OriginPage />,
    parentId: null,
  },
  {
    id: 'origin',
    title: 'Происхождение',
    relativePath: 'origins/:id',
    fullPath: '/game/character/origins/:id',
    element: <OriginPage />,
    parentId: 'origins',
  },
  {
    id: 'traits',
    title: 'Черты',
    relativePath: 'traits',
    fullPath: '/game/character/traits',
    element: <TraitsPage />,
    parentId: null,
  },
  {
    id: 'trait',
    title: 'Черта',
    relativePath: 'traits/:id',
    fullPath: '/game/character/traits/:id',
    element: <TraitsPage />,
    parentId: 'traits',
  },
  {
    id: 'spells',
    title: 'Заклинания',
    relativePath: 'spells',
    fullPath: '/game/character/spells',
    element: <SpellsPage />,
    parentId: null,
  },
  {
    id: 'spell',
    title: 'Заклинание',
    relativePath: 'spells/:id',
    fullPath: '/game/character/spells/:id',
    element: <SpellsPage />,
    parentId: 'spells',
  },
];

export const WORLD_NAVIGATION: NestedRoute[] = [
  {
    id: 'history',
    title: 'История',
    relativePath: 'history',
    fullPath: '/worlds/history',
    element: <div>useful</div>,
  },
  {
    id: 'locations',
    title: 'Локации',
    relativePath: 'locations',
    fullPath: '/worlds/locations',
    element: <div>useful</div>,
  },
  {
    id: 'personalities',
    title: 'Личности',
    relativePath: 'personalities',
    fullPath: '/worlds/personalities',
    element: <div>useful</div>,
  },
  {
    id: 'bosses',
    title: 'Рейдбосы',
    relativePath: 'bosses',
    fullPath: '/worlds/bosses',
    element: <div>useful</div>,
  },
  {
    id: 'library',
    title: 'Библиотека',
    relativePath: 'library',
    fullPath: '/worlds/library',
    element: <div>useful</div>,
  },
];

export const SUB_NAVIGATION_CONTROLLER: { id: string; data: NestedRoute[]; title: string }[] = [
  {
    id: '/docs/new-players',
    title: 'Для новых игроков',
    data: NEW_PLAYER_NAVIGATION,
  },
  {
    id: '/docs/events',
    title: 'Мероприятия',
    data: EVENTS_NAVIGATION,
  },
  {
    id: '/game/character',
    title: 'Персонаж',
    data: CHARACTER_NAVIGATION,
  },
  {
    id: '/worlds',
    title: 'Миры',
    data: WORLD_NAVIGATION,
  },
];
