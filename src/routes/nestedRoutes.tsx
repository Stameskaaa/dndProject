import { RaceCharacterPage } from '@/pages/races/raceCharacter/RaceCharacterPage';
import { RacesPage } from '@/pages/races/RacesPage';

export const NEW_PLAYER_NAVIGATION = [
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

export const EVENTS_NAVIGATION = [
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

export const CHARACTER_NAVIGATION = [
  {
    id: 'classes',
    title: 'Классы',
    relativePath: 'classes',
    fullPath: '/game/character/classes',
    element: <div>useful</div>,
  },
  {
    id: 'races',
    title: 'Виды',
    relativePath: 'races',
    fullPath: '/game/character/races',
    element: <RacesPage />,
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
    element: <div>useful</div>,
  },
  {
    id: 'traits',
    title: 'Черты',
    relativePath: 'traits',
    fullPath: '/game/character/traits',
    element: <div>useful</div>,
  },
  {
    id: 'spells',
    title: 'Заклинания',
    relativePath: 'spells',
    fullPath: '/game/character/spells',
    element: <div>useful</div>,
  },
];

export const WORLD_NAVIGATION = [
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
