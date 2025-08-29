import { useParams } from 'react-router-dom';
import { useGetOriginByIdQuery } from '@/features/origin/api';
import { Text } from '@/components/wrappers/typography/Text';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const OriginModal = () => {
  // TODO ПРИНИМАЕТ ТОЛЬКО АЙДИ БЕЗ МАССИВА
  const { id: paramsId } = useParams();
  const { data, isLoading, isError } = useGetOriginByIdQuery(
    { id: paramsId! },
    { skip: !paramsId },
  );

  if (isLoading) {
    return <CubeLoader />;
  }

  if (isError || !data) {
    // В компонент вынести
    return <Text>Произошла ошибочка</Text>;
  }

  console.log(data);

  return (
    <div className="flex flex-col w-full min-w-0">
      <DescriptionList
        data={[
          { title: 'Навыки', value: data.name },
          { title: 'Навыки', value: data.name },
          { title: 'Навыки', value: data.name },
        ]}
      />
      <DescriptionList
        options={{ background: true, size: 'md' }}
        data={[
          { title: 'Навыки', value: data.name },
          { title: 'Навыки', value: data.name },
          { title: 'Навыки', value: data.name },
        ]}
      />
    </div>
  );
};
