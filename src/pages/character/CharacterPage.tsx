import { Link } from 'react-router-dom';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';
import { CHARACTER_NAVIGATION } from '@/routes/nestedRoutes';

export const CharacterPage = () => {
  return (
    <Section screen>
      <Text size="4xl">Персонаж</Text>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {CHARACTER_NAVIGATION.map(({ title, fullPath }, i) => (
          <Link key={`${title}${i}`} to={fullPath}>
            <div className="w-[140px] h-[100px] bg-brand-200 rounded-2xl">
              <Text>{title}</Text>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
