import { CreatureTabs } from '../ui/CreatureTabs';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { raidBossMock } from '@/features/raidbosses/mock';

export const RaidBossesPage = () => {
  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        Рейд боссы
      </Text>
      <div className="flex flex-col gap-[50px]">
        {raidBossMock.map((data) => (
          <CreatureTabs raidBossData={data} key={data.id} />
        ))}
      </div>
    </Section>
  );
};
