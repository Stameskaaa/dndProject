import { useParams } from 'react-router-dom';
import { useGetTraitsByIdQuery } from '@/features/traits/api';
import { AsyncState } from './AsyncState';
import { Text } from '@/components/wrappers/typography/Text';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const TraitsModal = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTraitsByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper closeHref="/resources/character/traits" id={id}>
      <div className="flex flex-col w-full min-w-0">
        <AsyncState isLoading={isLoading} isError={isError} data={data}>
          <Text className="mx-auto mb-3" size="xl">
            {data?.name}
          </Text>
          <DescriptionList data={[{ title: 'Требования', value: data?.requirements }]} />
          <MarkDownText>{data?.md_content}</MarkDownText>
        </AsyncState>
      </div>
    </CharacterModalWrapper>
  );
};
