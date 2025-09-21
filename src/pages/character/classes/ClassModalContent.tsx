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
import { useNavigatePath } from '@/hooks/useNavigatePath';

export const ClassModalContent = () => {
  const { id } = useParams();
  const { navigatePath } = useNavigatePath();
  // const { data, isLoading, isError } = useGetClassByIdQuery({ id: id! }, { skip: !id });

  return (
    <CharacterModalWrapper
      closeAction={() => {
        navigatePath('/character/classes');
      }}
      open={!!id}>
      <div className="flex flex-col w-full min-w-0">
        <AsyncState isLoading={false} isError={false} data={true}>
          <div className="pb-3 flex bg-brand-400">
            <Text className="mx-auto" size="xl">
              {mockClass?.name}
            </Text>
          </div>
          <Separator spacing="equalSmall" className="mt-0" />
          <Text color="text-secondary">{mockClass?.mdDescription}</Text>
          <Separator spacing="equalSmall" />

          <DescriptionList
            options={{ background: true }}
            data={[
              {
                title: 'Броня',
                value: mockClass.armorId
                  .map((armorId) => armors.find(({ id }) => id == armorId)?.name)
                  .join(', '),
              },
              {
                title: 'Кость хита',
                value: `${mockClass.diceHit} за каждый уровень класса - ${mockClass?.name}`,
              },

              {
                title: 'Основная характеристика',
                value: mockClass.characteristicIds.map((id) => id).join(', '),
              },
              {
                title: 'Спасброски',
                value: mockClass.savingThrowsIds.map((id) => id).join(', '),
              },
              { title: 'Навыки', value: mockClass?.skills },
              { title: 'Оружие', value: mockClass?.weaponSkills },
              { title: 'Инструменты', value: mockClass.toolSkills },
              {
                title: 'Снаряжение (Выберите А или Б)',
                value: (
                  <Equipment
                    first={mockClass?.startEquipment[0]}
                    second={mockClass?.startEquipment[1]}
                  />
                ),
              },
            ]}
          />
          <Separator spacing="equalSmall" />
          <div className="w-full overflow-auto">
            <MarkDownText>{mockClass.mdTableData}</MarkDownText>
          </div>
        </AsyncState>
      </div>
    </CharacterModalWrapper>
  );
};
