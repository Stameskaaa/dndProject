import { Tabs } from '@/components/wrappers/navigation/tabs/Tabs';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Text } from '@/components/wrappers/typography/Text';
import type { NPC } from '@/features/npc/types';
import type { RaidBoss } from '@/features/raidbosses/types';

interface CreatureTabsProps {
  npcData?: NPC;
  raidBossData?: RaidBoss;
}

export const CreatureTabs: React.FC<CreatureTabsProps> = ({ npcData, raidBossData }) => {
  const data = raidBossData ?? npcData;

  if (!data) return null;

  const baseTabs = [
    {
      id: 1,
      title: 'Описание',
      cardContent: (
        <div className="h-full overflow-y-auto overscroll-contain">
          <MarkDownText>{data.md_description}</MarkDownText>
        </div>
      ),
    },
    {
      id: 2,
      title: 'История',
      cardContent: (
        <div className="h-full overflow-y-auto overscroll-contain">
          <MarkDownText>{data.md_history}</MarkDownText>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Интересные факты',
      cardContent: (
        <div className="h-full overflow-y-auto overscroll-contain">
          <MarkDownText>{data.md_fun_facts}</MarkDownText>
        </div>
      ),
    },
  ];

  const raidBossTabs =
    raidBossData && raidBossData.md_content
      ? [
          {
            id: 4,
            title: 'Статблок',
            cardContent: (
              <div className="h-full overflow-y-auto overscroll-contain">
                <MarkDownText>{raidBossData.md_content}</MarkDownText>
              </div>
            ),
          },
        ]
      : [];

  return (
    <div className="rounded-md bg-brand-400 overflow-hidden p-6 flex xl:flex-row flex-col lg:h-[700px] h-[1000px]">
      <div className="flex flex-1 gap-4 overflow-hidden flex-col lg:flex-row">
        <div className="flex-shrink-0 w-full relative h-[300px] lg:h-full lg:w-[500px]">
          <Text
            color="brand-100"
            className="absolute top-0 left-1/2 -translate-x-1/2 text-center min-w-[300px] max-w-[600px] bg-brand-400 rounded-b-2xl px-3 py-2"
            size="2xl">
            {data.name}
          </Text>
          <img
            src={data.src}
            alt={data.name}
            className="h-full w-full object-cover lg:w-auto lg:h-full rounded-md border-2 border-brand-300"
          />

          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: 'linear-gradient(to left, #1c2224 0%, transparent 20%)',
            }}
          />
        </div>

        <div className="flex-1 h-full">
          <Tabs
            defaultTabId={1}
            activeColor="bg-brand-300"
            bgClassName="bg-transparent"
            items={[...baseTabs, ...raidBossTabs]}
          />
        </div>
      </div>
    </div>
  );
};
