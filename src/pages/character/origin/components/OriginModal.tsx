import { useParams } from 'react-router-dom';
import { useGetOriginByIdQuery } from '@/features/origin/api';
import { Text } from '@/components/wrappers/typography/Text';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { pluckAndJoin } from '@/helpers/objectHelpers';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Separator } from '@/components/ui/separator';

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
  const { characteristic, feats, skills, toolSkills, name, equipment, md_content } = data;

  const Equipment = () => {
    return (
      <ul className="list-disc list-inside text-xl text-brand-100">
        <li>
          <Text as="span">(А) {equipment[0]}</Text>
        </li>
        <li>
          <Text as="span">(Б) {equipment[1]}</Text>
        </li>
      </ul>
    );
  };

  return (
    <div className="flex flex-col w-full min-w-0">
      <Text className="mx-auto mb-3" size="xl">
        {name}
      </Text>
      <DescriptionList
        data={[
          { title: 'Характеристики', value: pluckAndJoin(characteristic, 'name') },
          { title: 'Черты', value: pluckAndJoin(feats, 'name') },
          { title: 'Навыки', value: pluckAndJoin(skills, 'name') },
          { title: 'Владение инструментами', value: pluckAndJoin(toolSkills, 'description') },
          { title: 'Снаряжение (Выберите А или Б)', value: <Equipment /> },
        ]}
      />
      <Separator />
      <MarkDownText>{md_content}</MarkDownText>
    </div>
  );
};
