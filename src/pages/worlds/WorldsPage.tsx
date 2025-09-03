import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';

const mockWorld = [
  {
    name: 'Гурван-Гол',
    src: 'https://i.pinimg.com/originals/33/3c/04/333c04bfc4fe97a0a1450d72651109d9.png',
  },
];

export const WorldsPage = () => {
  return (
    <Section paddingY="medium" fixedWidth screen>
      <Text>Миры</Text>
    </Section>
  );
};
