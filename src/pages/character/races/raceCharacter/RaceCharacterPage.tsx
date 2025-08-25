import { useParams } from 'react-router-dom';
import { ChevronsLeftRight, ChevronsRightLeft, X } from 'lucide-react';
import { useGetRaceByIdQuery } from '@/features/races/api';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/wrappers/typography/Text';
import { Tabs } from '@/components/wrappers/navigation/tabs/Tabs';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { SectionModalContent } from '@/components/wrappers/sections/sectionModal/SectionModalContent';

interface RaceCharacterPageProps {
  isModal?: boolean;
  closeModal?: () => {};
  fullModal?: () => {};
}

export const RaceCharacterPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetRaceByIdQuery({ id: Number(id) });

  const Content: React.FC<RaceCharacterPageProps> = ({ closeModal, fullModal, isModal }) => {
    return isLoading ? (
      <CubeLoader />
    ) : (
      <div className="px-4 py-8 h-full relative">
        <div className="flex p-1 bg-brand-400 shadow-md shadow-black rounded-md  items-center gap-4 absolute left-10 top-[-18px]">
          <Button size="sm" variant="tonal" onClick={fullModal}>
            {isModal ? <ChevronsRightLeft /> : <ChevronsLeftRight />}
          </Button>
          <Text size="lg">{data?.name}</Text>
          <Button size="sm" variant="tonal" onClick={closeModal}>
            <X />
          </Button>
        </div>

        <Tabs
          defaultTabId={1}
          activeColor="bg-brand-300"
          className="max-w-[800px] m-0 !mr-auto"
          items={[
            {
              id: 1,
              title: 'Описание',
              cardContent: <Text>{data?.description}</Text>,
            },
            {
              id: 2,
              title: 'Игровые особенности',
              cardContent: <Text>{data?.features?.join(` `)}</Text>,
            },
            {
              id: 3,
              title: 'История',
              cardContent: (
                <>
                  {Object.entries(data?.stats || {}).map(([key, value]) => (
                    <div key={key} className="flex gap-3">
                      <Text weight="bold">{key}: </Text> <Text>{value}</Text>
                    </div>
                  ))}
                </>
              ),
            },
          ]}
        />
      </div>
    );
  };

  return (
    <SectionModalContent>
      <Content />
    </SectionModalContent>
  );
};
