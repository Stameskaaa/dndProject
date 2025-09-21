import { raceMock } from '@/features/races/mock';
import { Tabs } from '@/components/wrappers/navigation/tabs/Tabs';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import type { Race } from '@/features/races/types';
import { CharacterModalWrapper } from '../../ui/CharacterModalWrapper';
import { useNavigatePath } from '@/hooks/useNavigatePath';
import { Text } from '@/components/wrappers/typography/Text';
import { Separator } from '@/components/ui/separator';

export const RaceModal = () => {
  const { navigatePath } = useNavigatePath();

  return (
    <CharacterModalWrapper open={true} closeAction={() => navigatePath('/character/races')}>
      <div className="pb-3 flex bg-brand-400">
        <Text className="mx-auto" size="xl">
          {raceMock?.name}
        </Text>
      </div>
      <Separator spacing="equalSmall" className="mt-0" />
      <Tabs
        defaultTabId={1}
        activeColor="bg-brand-300"
        headerClassName="max-w-[800px] m-0 !mr-auto"
        items={[
          {
            id: 1,
            title: 'Описание',
            cardContent: <MarkDownText>{raceMock?.mdDescription || ''}</MarkDownText>,
          },
          {
            id: 2,
            title: 'Игровые особенности',
            cardContent: <RaceFeatures features={raceMock?.features} />,
          },
          {
            id: 3,
            title: 'История',
            cardContent: <MarkDownText>{raceMock?.mdHistory || ''}</MarkDownText>,
          },
        ]}
      />
    </CharacterModalWrapper>
  );
};

const RaceFeatures = ({ features }: { features?: Race['features'] }) => {
  if (!features) return null;

  return (
    <div>
      <DescriptionList
        options={{ background: true }}
        data={[
          { title: 'Тип существа', value: features?.type },
          { title: 'Размер', value: features?.size },
          { title: 'Скорость', value: features?.speed },
        ]}
      />
      <Separator />
      <MarkDownText>{features.mdContent}</MarkDownText>
    </div>
  );
};
