import { mockHostileCreature } from './CreaturePage';
import { CreationCardList } from './ui/CreatureCardList';

export const BeastListPage = () => {
  return (
    <CreationCardList
      title="Бестиарий"
      creatureData={Array.from({ length: 20 }, () => mockHostileCreature)}
    />
  );
};
