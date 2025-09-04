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

export const DnDRules = () => {
  const { control } = useForm();
  const TypeBlock = ({ type, id }: { type?: Rule['type']; id: number }) => {
    if (!type) return null;

    const types = typeof type === 'string' ? [type] : type;

    return (
      <div key={id} className="flex flex-row pt-2 flex-wrap gap-2">
        {types.map((data) => (
          <Badge size="md" key={data}>
            {data}
          </Badge>
        ))}
      </div>
    );
  };

  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        Правила D&D
      </Text>
      <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
        <div style={{ top: HeaderHeight }} className="flex gap-2 sticky bg-brand-500 py-6">
          <Input className="flex-1" control={control} name="name" placeholder="Введите название" />
          <Selector
            placeholder="Введите тег"
            label="Список тегов"
            name="tag"
            control={control}
            options={[
              { id: '1', value: 'Основные действия' },
              { id: '2', value: 'Сражения' },
            ]}
          />
        </div>

        {dndRules.map(({ id, title, md_content, type }, i) => (
          <React.Fragment key={id}>
            <div key={id} className="flex flex-col gap-2">
              <Text color="brand-100" size="xl">
                {title}
              </Text>
              <MarkDownText>{md_content}</MarkDownText>
              <TypeBlock id={i} type={type} />
            </div>{' '}
            {i !== dndRules.length - 1 && <Separator className="bg-brand-300" spacing="empty" />}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
