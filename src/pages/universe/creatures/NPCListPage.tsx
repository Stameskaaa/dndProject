import { mockNPC } from './CreaturePage';
import { CreationCardList } from './ui/CreatureCardList';

export const NPCListPage = () => {
  return (
    <CreationCardList title="Личности" creatureData={Array.from({ length: 20 }, () => mockNPC)} />
  );
};
