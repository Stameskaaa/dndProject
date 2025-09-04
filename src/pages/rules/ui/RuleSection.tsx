import { useMemo, useState } from 'react';
import type { Rule } from '@/features/rules/types';
import { groupRules } from '../helpers';
import { RuleCard } from '../ui/RuleCard';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Accordion } from '@/components/wrappers/navigation/accordion/Accordion';
import { clubRulesTypes, homeRuleTypes } from '@/features/rules/constant';

interface RulesSectionPageProps {
  rules: Rule[];
  type: 'home' | 'club';
}

export const RulesSection = ({ rules, type }: RulesSectionPageProps) => {
  const groupedData = useMemo(() => groupRules(rules), [rules]);
  const types = type === 'club' ? clubRulesTypes : homeRuleTypes;
  const title = type === 'club' ? 'Правила клуба' : 'Домашние правила';
  const firstId = groupedData[0]?.id || '';

  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        {title}
      </Text>

      <div className="flex flex-col gap-[20px]">
        {groupedData.map(({ id, content }) => {
          if (!content.length) return null;
          const ruleType = types.find((data) => data.id === id);

          return (
            <Accordion
              key={id}
              triggerClass="px-6 py-4 rounded-md"
              containerClass="bg-brand-500 shadow-sm shadow-black rounded-md hover:brand-100"
              contentClass="p-4"
              defaultValue={firstId}
              data={[
                {
                  id,
                  title: (
                    <Text color="text-secondary" size="2xl">
                      {ruleType?.name}
                    </Text>
                  ),
                  content: (
                    <div
                      className="w-full grid justify-items-center gap-6
             grid-cols-[repeat(auto-fit,_minmax(200px,1fr))]
             max-[1000px]:grid-cols-[repeat(auto-fit,_minmax(100%,1fr))]">
                      {content.map(({ id, title, short_description, md_content }) => (
                        <RuleCard
                          icon={ruleType?.icon}
                          key={id}
                          title={title}
                          description={short_description}
                          full_description={md_content}
                        />
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          );
        })}
      </div>
    </Section>
  );
};
