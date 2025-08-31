import { useParams } from 'react-router-dom';
import { useGetOriginByIdQuery } from '@/features/origin/api';
import { Separator } from '@/components/ui/separator';
import { pluckAndJoin } from '@/helpers/objectHelpers';
import { Text } from '@/components/wrappers/typography/Text';
import { AsyncState } from '../../ui/AsyncState';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const OriginModal = () => {
  // TODO ПРИНИМАЕТ ТОЛЬКО АЙДИ БЕЗ МАССИВА
  const { id: paramsId } = useParams();
  const { data, isLoading, isError } = useGetOriginByIdQuery(
    { id: paramsId! },
    { skip: !paramsId },
  );

  const Equipment = () => {
    return (
      <ul className="list-disc list-inside text-xl text-brand-100">
        <li>
          <Text as="span">(А) {data?.equipment[0]}</Text>
        </li>
        <li>
          <Text as="span">(Б) {data?.equipment[1]}</Text>
        </li>
      </ul>
    );
  };

  return (
    <CharacterModalWrapper id={paramsId} closeHref="/resources/character/origins">
      <AsyncState isLoading={isLoading} isError={isError} data={data}>
        <div className="flex flex-col w-full min-w-0">
          <Text className="mx-auto mb-3" size="xl">
            {data?.name}
          </Text>
          <DescriptionList
            options={{ gap: 4 }}
            data={[
              { title: 'Характеристики', value: pluckAndJoin('name', data?.characteristic) },
              { title: 'Черты', value: pluckAndJoin('name', data?.feats) },
              { title: 'Навыки', value: pluckAndJoin('name', data?.skills) },
              {
                title: 'Владение инструментами',
                value: pluckAndJoin('description', data?.toolSkills),
              },
              { title: 'Снаряжение (Выберите А или Б)', value: <Equipment /> },
            ]}
          />
          <Separator />
          <MarkDownText>{data?.md_content}</MarkDownText>
        </div>
      </AsyncState>
    </CharacterModalWrapper>
  );
};
