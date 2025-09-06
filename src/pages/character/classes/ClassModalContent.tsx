import { useParams } from 'react-router-dom';
import { CharacterModalWrapper } from '../ui/CharacterModalWrapper';
import { AsyncState } from '../ui/AsyncState';
import { Text } from '@/components/wrappers/typography/Text';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { armors } from '@/mock/mock';
import { Separator } from '@/components/ui/separator';
import { Equipment } from '../ui/Equipment';
import { mockClass } from '@/features/classes/mock';

export const ClassModalContent = () => {
  const { id } = useParams();
  // const { data, isLoading, isError } = useGetClassByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper closeHref="/character/classes" id={id}>
      <div className="flex flex-col w-full min-w-0">
        <AsyncState isLoading={false} isError={false} data={true}>
          <div className="pb-3 flex bg-brand-400">
            <Text className="mx-auto" size="xl">
              {mockClass?.name}
            </Text>
          </div>
          <Separator spacing="equalSmall" className="mt-0" />
          <Text color="text-secondary">{mockClass?.description}</Text>
          <Separator spacing="equalSmall" />

          <DescriptionList
            options={{ background: true }}
            data={[
              {
                title: 'Броня',
                value: mockClass.armor_id
                  .map((armorId) => armors.find(({ id }) => id == armorId)?.name)
                  .join(', '),
              },
              {
                title: 'Кость хита',
                value: `${mockClass.dice_hit} за каждый уровень класса - ${mockClass?.name}`,
              },

              {
                title: 'Основная характеристика',
                value: mockClass.characteristic_data.map(({ name }) => name).join(', '),
              },
              {
                title: 'Спасброски',
                value: mockClass.saving_throws.map(({ name }) => name).join(', '),
              },
              { title: 'Навыки', value: mockClass?.skills },
              { title: 'Оружие', value: mockClass?.weapon_skills.join(', ') },
              { title: 'Инструменты', value: mockClass.tool_skills },
              {
                title: 'Снаряжение (Выберите А или Б)',
                value: (
                  <Equipment
                    first={mockClass?.start_equipment[0]}
                    second={mockClass?.start_equipment[1]}
                  />
                ),
              },
            ]}
          />
          <Separator spacing="equalSmall" />
          <div className="w-full overflow-auto">
            <MarkDownText>{mockClass.md_table_data}</MarkDownText>
          </div>
        </AsyncState>
      </div>
    </CharacterModalWrapper>
  );
};
