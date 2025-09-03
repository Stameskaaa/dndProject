import { useMemo } from 'react';
import type { Rule } from '@/features/rules/types';
import { groupRules } from '../helpers';
import { RuleCard } from '../ui/RuleCard';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

interface RulesSectionPageProps {
  title: string;
  rules: Rule[];
}

export const RulesSection = ({ title, rules }: RulesSectionPageProps) => {
  const groupedData = useMemo(() => groupRules(rules), [rules]);

  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto" size="4xl">
        {title}
      </Text>

      <div className="flex flex-col gap-[20px]">
        {groupedData.map(({ title, content }) => {
          if (!content.length) return null;

          return (
            <div
              key={title}
              className="flex flex-col gap-6 bg-brand-500 shadow-xl shadow-black p-4 py-8 rounded-xl">
              <div className="w-full rounded-md border-b-4 border-brand-300 px-4 pb-4">
                <Text color="text-secondary" size="2xl">
                  {title}
                </Text>
              </div>
              <div
                className="w-full grid justify-items-center gap-6"
                style={{ gridTemplateColumns: `repeat(auto-fit, minmax(200px, 240px))` }}>
                {content.map(({ id, title, short_description, md_content }) => (
                  <RuleCard
                    key={id}
                    title={title}
                    description={short_description}
                    full_description={md_content}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
