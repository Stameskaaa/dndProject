import { Link } from 'react-router-dom';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';
import { CHARACTER_NAVIGATION } from '@/routes/nestedRoutes';

export const CharacterPage = () => {
  return (
    <Section screen>
      CharacterPage
      {CHARACTER_NAVIGATION.map(({ title, fullPath }) => (
        <Link key={title} to={fullPath}>
          <Text>{title}</Text>
        </Link>
      ))}
    </Section>
  );
};
