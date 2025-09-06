import { CreatureTabs } from '../ui/CreatureTabs';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { npcData } from '@/features/npc/mock';

export const NPCPage = () => {
  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        Личности
      </Text>
      <div className="flex flex-col gap-[50px]">
        {npcData.map((data) => (
          <CreatureTabs npcData={data} key={data.id} />
        ))}
      </div>
    </Section>
  );
};
