import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';

export const LocationPage = () => {
  return (
    <Section paddingY="medium" className="flex flex-col gap-4" screen fixedWidth>
      <Text className="mx-auto mb-4" size="4xl">
        Локация
      </Text>
    </Section>
  );
};
