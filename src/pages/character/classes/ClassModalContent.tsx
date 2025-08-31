import { useParams } from 'react-router-dom';
import { CharacterModalWrapper } from '../ui/CharacterModalWrapper';
import { AsyncState } from '../ui/AsyncState';
import { Text } from '@/components/wrappers/typography/Text';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { useGetClassByIdQuery } from '@/features/classes/api';

export const ClassModalContent = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetClassByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper closeHref="/resources/character/classes" id={id}>
      <div className="flex flex-col w-full min-w-0">
        <AsyncState isLoading={isLoading} isError={isError} data={data}>
          <Text className="mx-auto mb-3" size="xl">
            {data?.name}
          </Text>
          <DescriptionList
            data={[
              { title: 'Броня', value: data?.features.armor },
              { title: 'Кость хита', value: data?.features.hitDice },
              { title: 'Инструменты', value: data?.features.instruments },
              { title: 'Основная характеристика', value: data?.features.mainCharacteristic },
              { title: 'Спасброски', value: data?.features.savingThrows.join(', ') },
              { title: 'Навыки', value: data?.features.skills },
              { title: 'Оружие', value: data?.features.weapons },
            ]}
          />
          <MarkDownText>{data?.description}</MarkDownText>
        </AsyncState>
      </div>
    </CharacterModalWrapper>
  );
};
