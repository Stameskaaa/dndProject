import { useParams } from 'react-router-dom';
import { schoolList } from '@/features/spells/constant';
import { useGetSpellByIdQuery } from '@/features/spells/api';
import { Badge } from '@/components/wrappers/badge/Badge';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { AsyncState } from '@/pages/character/traits/components/AsyncState';
import { CharacterModalWrapper } from '@/pages/character/ui/CharacterModalWrapper';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';

export const SpellModal = () => {
  const { id: paramsId } = useParams();
  const {
    data: spell,
    isLoading,
    isError,
  } = useGetSpellByIdQuery({ id: paramsId! }, { skip: !paramsId });

  const school = schoolList.find(({ id }) => id == spell?.school_id);

  return (
    <CharacterModalWrapper id={paramsId} closeHref="/resources/character/spells">
      <AsyncState isLoading={isLoading} isError={isError} data={spell}>
        <div className="flex flex-col gap-1 items-center">
          <Text size="2xl" weight="bold" color="brand-100">
            {spell?.name}
          </Text>
          <Text size="md" color="text-secondary">
            {spell?.level === 0 ? 'Кантрип' : `Уровень ${spell?.level}`} · {school?.title}
          </Text>
        </div>
        <SpellDescription type="full" data={spell} />
        <Text color="text-secondary">{spell?.full_description}</Text>
        <div className="mt-auto flex gap-2 items-center flex-wrap">
          <Text color="text-muted" as="span">
            Доступно классам:
          </Text>
          {spell?.classes.map(({ name, id }) => (
            <Badge key={id}>{name}</Badge>
          ))}
        </div>
      </AsyncState>
    </CharacterModalWrapper>
  );
};
