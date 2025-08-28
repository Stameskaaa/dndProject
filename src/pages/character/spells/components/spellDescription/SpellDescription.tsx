import classNames from 'classnames';
import { Hourglass, MoveHorizontal, Sprout, Timer, type LucideIcon } from 'lucide-react';
import type { SpellDataType } from '@/features/spells/types';
import { spellComponents } from '@/features/spells/constant';
import { Text } from '@/components/wrappers/typography/Text';

export const SpellDescription = ({
  data,
  type = 'short',
}: {
  data: SpellDataType;
  type?: 'full' | 'short';
}) => {
  const DescriptionItem = ({
    title,
    value,
    icon: Icon,
  }: {
    title: string;
    value: string;
    icon: LucideIcon;
  }) => {
    const size = type === 'full' ? 'md' : 'sm';

    return (
      <div className="flex-1 flex items-start gap-1">
        <Text color="text-primary" className="flex items-center gap-1 text-nowrap" size={size}>
          <Icon size={14} /> {title}:
        </Text>
        <Text as="span" size={size} color="text-muted">
          {value}
        </Text>
      </div>
    );
  };

  const component = data.components_list
    ?.map((currentId) => spellComponents.find(({ id }) => id == currentId)?.name)
    .join(', ');

  return (
    <div
      className={classNames(
        'flex flex-col gap-1 text-sm',
        type === 'full' ? 'bg-brand-200 py-3 px-4 rounded-md' : '',
      )}>
      <DescriptionItem icon={Hourglass} title="Время сотворения" value={data?.castingTime} />
      <DescriptionItem icon={Timer} title="Длительность" value={data?.duration} />
      <DescriptionItem icon={MoveHorizontal} title="Дистанция" value={data?.distance} />
      <DescriptionItem icon={Sprout} title="Компоненты" value={component} />
    </div>
  );
};
