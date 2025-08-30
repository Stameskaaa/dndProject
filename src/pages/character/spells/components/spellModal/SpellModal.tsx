import { Expand, X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { schoolList } from '@/features/spells/constant';
import { useGetSpellByIdQuery } from '@/features/spells/api';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/wrappers/badge/Badge';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';

export const SpellModal = ({ setOpen }: { setOpen?: (state: boolean) => {} }) => {
  const { id: paramsId } = useParams();
  const {
    data: spell,
    isLoading,
    isError,
  } = useGetSpellByIdQuery({ id: paramsId! }, { skip: !paramsId });

  if (isLoading) {
    return <CubeLoader />;
  }

  if (!spell || isError) {
    return <Text>Произошла ошибочка</Text>;
  }
  const { name, school_id, level } = spell;
  const school = schoolList.find(({ id }) => id == school_id);

  return (
    <>
      <div className="absolute right-[10px] top-[10px] flex gap-1">
        <Button onClick={() => setOpen?.(false)} size="icon">
          <X />
        </Button>
        <Button onClick={() => alert('Ты лох')} size="icon">
          <Expand />
        </Button>
      </div>

      <div className="h-[full] w-full px-1 max-w-[800px] flex flex-col gap-4 overflow-y-auto">
        <div className="flex flex-col gap-1 items-center">
          <Text size="2xl" weight="bold" color="brand-100">
            {name}
          </Text>
          <Text size="md" color="text-secondary">
            {level === 0 ? 'Кантрип' : `Уровень ${level}`} · {school?.title}
          </Text>
        </div>
        <SpellDescription type="full" data={spell} />
        <Text color="text-secondary">{spell.full_description}</Text>
        <div className="mt-auto flex gap-2 items-center flex-wrap">
          <Text color="text-muted" as="span">
            Доступно классам:
          </Text>
          {spell.classes.map(({ name, id }) => (
            <Badge key={id}>{name}</Badge>
          ))}
        </div>
      </div>
    </>
  );
};
