import { useParams } from 'react-router-dom';
import { useGetTraitsByIdQuery } from '@/features/traits/api';
import { Text } from '@/components/wrappers/typography/Text';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const TraitsModal = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTraitsByIdQuery({ id: id! }, { skip: !id });

  if (isLoading) {
    return <CubeLoader />;
  }

  if (isError) {
    return <Text>Произошла ошибка</Text>;
  }

  return (
    <div className="flex flex-col w-full min-w-0">
      <Text className="mx-auto mb-3" size="xl">
        {data?.name}
      </Text>
      <DescriptionList data={[{ title: 'Требования', value: data?.requirements }]} />
      <MarkDownText>{data?.md_content}</MarkDownText>
    </div>
  );
};
