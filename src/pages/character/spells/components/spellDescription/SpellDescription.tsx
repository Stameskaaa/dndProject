import { Hourglass, MoveHorizontal, Sprout, Timer } from 'lucide-react';
import type { SpellDataType } from '@/features/spells/types';
import { spellComponents } from '@/features/spells/constant';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const SpellDescription = ({
  data,
  type = 'short',
}: {
  data?: SpellDataType;
  type?: 'full' | 'short';
}) => {
  const component = data?.components_list
    ?.map((currentId) => spellComponents.find(({ id }) => id == currentId)?.name)
    .join(', ');

  const descriptionData = [
    { title: 'Время сотворения', icon: Hourglass, value: data?.castingTime },
    { title: 'Длительность', icon: Timer, value: data?.duration },
    { title: 'Дистанция', icon: MoveHorizontal, value: data?.distance },
    { title: 'Компоненты', icon: Sprout, value: component },
  ];

  return <DescriptionList options={{ background: type !== 'short' }} data={descriptionData} />;
};
