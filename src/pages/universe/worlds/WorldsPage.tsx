import { NavigationSection } from '../../../components/wrappers/sections/NavigationSection/NavigationSection';

const mockWorld = [
  {
    id: 'gurval-gol',
    title: 'Гурван-Гол',
    description:
      'В долине Гурван-Гол величественные горы отражаются в кристально чистой реке, а в воздухе витает магия древних легенд.',
    src: 'https://i.pinimg.com/1200x/c0/94/09/c0940999c42a28439ab29c3154352c0e.jpg',
    path: 'gurval-gol',
  },
  {
    id: 'artro-meigre',
    title: 'Побережье Арто Мейгре',
    description: 'В ледяных Арто Мейгре отражаются суровые горы, а северное сияниееверных земель.',
    src: 'https://i.pinimg.com/736x/18/9c/cd/189ccd6af26ba5c78d2db0551ac95c4c.jpg',
    path: 'artro-meigre',
  },
];

export const WorldsPage = () => {
  return <NavigationSection pageTitle="Миры" items={mockWorld} />;
};
