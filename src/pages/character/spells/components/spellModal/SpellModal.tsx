import { useParams } from 'react-router-dom';
import { schoolList } from '@/features/spells/constant';
import type { SpellDataType } from '@/features/spells/types';
import { Badge } from '@/components/wrappers/badge/Badge';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SpellModal = ({
  spellData,
  setOpen,
}: {
  spellData?: SpellDataType[];
  setOpen?: (state: boolean) => {};
}) => {
  const { id: paramsId } = useParams();
  const currentSpell = spellData?.find(({ id }) => id == paramsId);

  if (!currentSpell) {
    return <Text>Произошла ошибочка</Text>;
  }
  const { name, school_id, level } = currentSpell;
  const school = schoolList.find(({ id }) => id == school_id);

  return (
    <>
      <Button
        onClick={() => setOpen?.(false)}
        size="icon"
        className="absolute right-[10px] top-[10px]">
        <X />
      </Button>
      <div className="h-[full] w-full px-1 max-w-[800px] flex flex-col gap-4 overflow-y-auto">
        <div className="flex flex-col gap-1 items-center">
          <Text size="2xl" weight="bold" color="brand-100">
            {name}
          </Text>
          <Text size="md" color="text-secondary">
            {level === 0 ? 'Кантрип' : `Уровень ${level}`} · {school?.title}
          </Text>
        </div>
        <SpellDescription type="full" data={currentSpell} />
        <Text color="text-secondary">{currentSpell.full_description}</Text>
        <div className="mt-auto flex gap-2 items-center flex-wrap">
          <Text color="text-muted" as="span">
            Доступно классам:
          </Text>
          {currentSpell.classes.map(({ name, id }) => (
            <Badge key={id}>{name}</Badge>
          ))}
        </div>
      </div>
    </>
  );
};
