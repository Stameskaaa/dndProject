import { Text } from '@/components/wrappers/typography/Text';
import { CreatureContent } from './components/CreatureContent';
import { Description } from './components/Description';
import type { HostileCreatures } from '@/features/hostileCreatures/types';
import type { NPC } from '@/features/npc/types';
import { StatBlock } from './components/StatBlock';
import type { God } from '@/features/gods/types';

interface CreatureTabsProps {
  creatureData?: HostileCreatures | God | NPC;
}

export const CreatureComponent: React.FC<CreatureTabsProps> = ({ creatureData }) => {
  if (!creatureData) return null;
  function hasField<T extends object>(obj: T, key: keyof any): boolean {
    return Boolean((obj as any)[key]);
  }

  return (
    <div className="rounded-md p-6 flex xl:flex-row flex-col">
      <div className="flex flex-1 gap-4 flex-col">
        <div className="relative">
          <div className="float-left p-2 bg-brand-400 rounded-md relative mr-4 mb-4 max-[600px]:float-none max-[600px]:w-full inline-block w-[300px]">
            <img
              src={creatureData.src}
              alt={creatureData.name}
              className="w-full h-auto object-contain rounded-md"
            />
            <Text
              color="brand-100"
              className="text-center absolute top-0 px-3 py-2 box-border left-0 bg-brand-400 rounded-md text-xl max-[1000px]:text-lg w-full">
              {creatureData.name}
            </Text>
          </div>
          <div className="space-y-4">
            <CreatureContent creatureData={creatureData} />
            {hasField(creatureData, 'fraction') && (
              <Description title="Фракция" desc={(creatureData as NPC).fraction} />
            )}
            {hasField(creatureData, 'status') && (
              <Description title="Последние записи" desc={(creatureData as NPC).status} />
            )}
            {hasField(creatureData, 'locations') && (
              <Description
                title="Локации"
                desc={(creatureData as HostileCreatures).locations
                  .map(({ name }) => name)
                  .join(', ')}
              />
            )}
            {hasField(creatureData, 'mdHistory') && (
              <Description
                title="История"
                variant="block"
                desc={(creatureData as HostileCreatures).mdHistory}
              />
            )}
            {hasField(creatureData, 'mdFunFacts') && (
              <Description
                title="Интересные факты"
                variant="block"
                desc={(creatureData as HostileCreatures).mdFunFacts}
              />
            )}
            <StatBlock creatureData={creatureData} />
          </div>
        </div>
      </div>
    </div>
  );
};
