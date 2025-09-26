import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { dndRules } from '@/features/rules/mock';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import type { Rule } from '@/features/rules/types';
import { Badge } from '@/components/wrappers/badge/Badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/wrappers/forms/input/Input';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { HeaderHeight } from '@/constants/heights';
import { dndRuleTags } from '@/features/rules/constant';

export const DnDRules = () => {
  const { control } = useForm();
  const TypeBlock = ({ tags, id }: { tags?: Rule['tags']; id: number }) => {
    if (!Array.isArray(tags) || tags.length === 0) return null;

    return (
      <div key={id} className="flex flex-row pt-2 flex-wrap gap-2">
        {tags.map((data) => {
          const value = dndRuleTags.find(({ id }) => id === data)?.value || '';
          return (
            <Badge size="md" key={value}>
              {value}
            </Badge>
          );
        })}
      </div>
    );
  };

  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        Правила D&D
      </Text>
      <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
        <div
          style={{ top: HeaderHeight }}
          className="flex gap-2 sticky bg-brand-500 py-6 -mx-0.5 px-0.5 flex-wrap">
          <Input
            className="flex-2 min-w-[300px]"
            control={control}
            name="name"
            placeholder="Введите название"
          />
          <Selector
            className="flex-1"
            placeholder="Введите тег"
            label="Список тегов"
            name="tag"
            control={control}
            options={dndRuleTags}
          />
        </div>

        {dndRules.map(({ id, title, mdContent, tags }, i) => (
          <React.Fragment key={id}>
            <div key={id} className="flex flex-col gap-2">
              <Text color="brand-100" size="xl">
                {title}
              </Text>
              <MarkDownText>{mdContent}</MarkDownText>
              <TypeBlock id={i} tags={tags} />
            </div>{' '}
            {i !== dndRules.length - 1 && <Separator className="bg-brand-300" spacing="empty" />}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
