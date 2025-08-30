import { Link } from 'react-router-dom';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Text } from '@/components/wrappers/typography/Text';
import { CHARACTER_NAVIGATION } from '@/routes/nestedRoutes';

export const CharacterPage = () => {
  return (
    <Section paddingY="medium" screen className="items-center flex flex-col">
      <div className="flex flex-col gap-4 w-full max-w-[700px]">
        <Text className="mr-auto" size="4xl">
          Персонаж
        </Text>
        {CHARACTER_NAVIGATION.map(({ title, fullPath }, i) => (
          <Link key={`${title}${i}`} to={fullPath}>
            <div className=" h-[200px] rounded-xl bg-brand-300">
              <Text>{title}</Text>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
