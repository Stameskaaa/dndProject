import { Separator } from '@/components/ui/separator';
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
    <div className="rounded-md bg-brand-400 overflow-hidden p-6 h-[700px] flex flex-col">
      <Text color="brand-100" size="3xl">
        {data.name}
      </Text>
      <Separator className="bg-brand-300" spacing="equalSmall" />

      <div className="flex flex-1 gap-4 overflow-hidden flex-wrap">
        <div className="flex-1 h-full">
          <Tabs
            defaultTabId={1}
            activeColor="bg-brand-300"
            bgClassName="bg-transparent"
            items={[...baseTabs, ...raidBossTabs]}
          />
        </div>

        <div className="flex-shrink-0 w-[500px] h-full relative">
          <img
            src={data.src}
            alt={data.name}
            className="w-full h-full object-cover rounded-md border-2 border-brand-300"
          />
        </div>
      </div>
    </div>
  );
};
