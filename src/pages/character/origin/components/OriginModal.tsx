import { useParams } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { AsyncState } from '../../ui/AsyncState';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { originMock } from '@/mock/mock';
import { Equipment } from '../../ui/Equipment';
export const OriginModal = () => {
  const { id: paramsId } = useParams();

  return (
    <CharacterModalWrapper id={paramsId} closeHref="/resources/character/origins">
      <AsyncState isLoading={false} isError={false} data={true}>
        <div className="pb-3 flex bg-brand-400">
          <Text className="mx-auto" size="xl">
            {originMock?.name}
          </Text>
        </div>
        <div className="flex flex-col w-full min-w-0">
          <Separator className="mt-0" spacing="equalSmall" />
          <DescriptionList
            options={{ gap: 4, background: true }}
            data={[
              {
                title: 'Характеристики',
                value: originMock.characteristic_data.map(({ name }) => name).join(', '),
              },
              { title: 'Черты', value: originMock.trait_data.map(({ name }) => name).join(', ') },
              { title: 'Навыки', value: originMock.skills },
              {
                title: 'Владение инструментами',
                value: originMock.tool_skills,
              },
              {
                title: 'Снаряжение (Выберите А или Б)',
                value: (
                  <Equipment
                    first={originMock.start_equipment[0]}
                    second={originMock.start_equipment[1]}
                  />
                ),
              },
            ]}
          />
          <Separator spacing="equalSmall" />
          <MarkDownText>{originMock?.md_description}</MarkDownText>
        </div>
      </AsyncState>
    </CharacterModalWrapper>
  );
};
