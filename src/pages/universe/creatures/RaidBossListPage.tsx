import { mockHostileCreature2 } from './CreaturePage';
import { CreationCardList } from './ui/CreatureCardList';

export const RaidBossListPage = () => {
  return (
    <CreationCardList
      title="Рейдбоссы"
      creatureData={Array.from({ length: 20 }, () => mockHostileCreature2)}
    />
  );
};
