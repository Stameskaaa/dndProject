import { useParams } from 'react-router-dom';
import { AsyncState } from '../../ui/AsyncState';
import { Text } from '@/components/wrappers/typography/Text';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { Separator } from '@/components/ui/separator';
import { traitMock } from '@/features/traits/mock';
import { useNavigatePath } from '@/hooks/useNavigatePath';

export const TraitsModal = () => {
  const { id } = useParams();
  const { navigatePath } = useNavigatePath();
  // const { data, isLoading, isError } = useGetTraitsByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper closeAction={() => navigatePath('/character/traits')} open={!!id}>
      <div className="flex flex-col w-full min-w-0">
        <AsyncState isLoading={false} isError={false} data={true}>
          <div className="pb-3 flex bg-brand-400">
            <Text className="mx-auto" size="xl">
              {traitMock?.name}
            </Text>
          </div>
          <Separator className="mt-0" />
          {traitMock?.requirements ? (
            <>
              <DescriptionList data={[{ title: 'Требования', value: traitMock?.requirements }]} />
              <Separator spacing="equalSmall" />
            </>
          ) : null}
          <MarkDownText>{traitMock?.md_description}</MarkDownText>
        </AsyncState>
      </div>
    </CharacterModalWrapper>
  );
};
