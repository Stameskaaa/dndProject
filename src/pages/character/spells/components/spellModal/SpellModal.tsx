import { useParams } from 'react-router-dom';
import { schoolList } from '@/mock/mock';
import { spellMock } from '@/features/spells/mock';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/wrappers/badge/Badge';
import { useNavigatePath } from '@/hooks/useNavigatePath';
import { AsyncState } from '@/pages/character/ui/AsyncState';
import { Text } from '../../../../../components/wrappers/typography/Text';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { CharacterModalWrapper } from '@/pages/character/ui/CharacterModalWrapper';
import { SpellDescription } from '@/pages/character/spells/components/spellDescription/SpellDescription';

export const SpellModal = () => {
  const { id: paramsId } = useParams();
  const { navigatePath } = useNavigatePath();
  const school = schoolList.find(({ id }) => id == spellMock?.schoolId);

  return (
    <CharacterModalWrapper open={!!paramsId} closeAction={() => navigatePath('/character/spells')}>
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
          <MarkDownText>{spellMock?.mdDescription}</MarkDownText>
          {spellMock?.classes.length > 0 ? (
            <div className="mt-auto flex gap-2 items-center flex-wrap">
              <Text color="text-muted" as="span">
                Доступно классам:
              </Text>
              {spellMock?.classes.map(({ name, id }) => (
                <Badge key={id}>{name}</Badge>
              ))}
            </div>
          ) : null}
        </div>
      </AsyncState>
    </CharacterModalWrapper>
  );
};
