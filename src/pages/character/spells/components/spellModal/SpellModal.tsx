import { useParams } from 'react-router-dom';
import { schoolList } from '@/mock/mock';
import { Badge } from '@/components/wrappers/badge/Badge';
import { AsyncState } from '@/pages/character/ui/AsyncState';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { CharacterModalWrapper } from '@/pages/character/ui/CharacterModalWrapper';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Separator } from '@/components/ui/separator';
import { spellMock } from '@/features/spells/mock';

export const SpellModal = () => {
  const { id: paramsId } = useParams();
  const school = schoolList.find(({ id }) => id == spellMock?.school_id);

  return (
    <CharacterModalWrapper id={paramsId} closeHref="/character/spells">
      <AsyncState isLoading={false} isError={false} data={true}>
        <div className="flex flex-col gap-1 items-center pb-3">
          <Text size="2xl" weight="bold" color="brand-100">
            {spellMock?.name}
          </Text>

          <Text size="md" color="text-secondary">
            {spellMock?.level === 0 ? 'Кантрип' : `Уровень ${spellMock?.level}`} · {school?.title}
          </Text>
        </div>
        <div className="flex flex-col gap-3">
          <Separator spacing="empty" />
          <SpellDescription type="full" data={spellMock} />
          <Separator spacing="empty" />
          <MarkDownText>{spellMock?.md_description}</MarkDownText>
          {spellMock?.class_data.length > 0 ? (
            <div className="mt-auto flex gap-2 items-center flex-wrap">
              <Text color="text-muted" as="span">
                Доступно классам:
              </Text>
              {spellMock?.class_data.map(({ name, id }) => (
                <Badge key={id}>{name}</Badge>
              ))}
            </div>
          ) : null}
        </div>
      </AsyncState>
    </CharacterModalWrapper>
  );
};
