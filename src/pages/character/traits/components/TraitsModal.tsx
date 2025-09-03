import { useParams } from 'react-router-dom';
import { AsyncState } from '../../ui/AsyncState';
import { Text } from '@/components/wrappers/typography/Text';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { traitMock } from '@/mock/mock';
import { Separator } from '@/components/ui/separator';

export const TraitsModal = () => {
  const { id } = useParams();
  // const { data, isLoading, isError } = useGetTraitsByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper closeHref="/resources/character/traits" id={id}>
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
