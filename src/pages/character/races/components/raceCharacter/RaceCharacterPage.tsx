import { useParams } from 'react-router-dom';
import { Expand, Shrink, X } from 'lucide-react';
import { useGetRaceByIdQuery } from '@/features/races/api';
import { Button } from '@/components/ui/button';
import { RaceHistory } from './components/RaceHistory';
import { RaceFeatures } from './components/RaceFeatures';
import { Text } from '@/components/wrappers/typography/Text';
import { RaceDescription } from './components/RaceDescription';
import { Tabs } from '@/components/wrappers/navigation/tabs/Tabs';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { SectionModalContent } from '@/components/wrappers/sections/sectionModal/SectionModalContent';

interface RaceCharacterPageProps {
  isModal?: boolean;
  closeModal?: () => {};
  fullModal?: () => {};
  isModalLocked?: boolean;
}

export const RaceCharacterPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetRaceByIdQuery({ id: id! }, { skip: !id });

  const Content: React.FC<RaceCharacterPageProps> = ({
    closeModal,
    fullModal,
    isModal,
    isModalLocked,
  }) => {
    return isLoading ? (
      <CubeLoader />
    ) : (
      <div className="px-4 py-8 h-full relative">
        {!data ? (
          <Text>Произошла ошибочка</Text>
        ) : (
          <>
            <div className="flex p-1 bg-brand-400 shadow-md shadow-black rounded-md  items-center gap-4 absolute left-10 top-[-18px]">
              {!isModalLocked ? (
                <Button size="sm" variant="tonal" onClick={fullModal}>
                  {isModal ? <Shrink /> : <Expand />}
                </Button>
              ) : (
                <div />
              )}
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
                  cardContent: <RaceDescription raceDescription={data.description!} />,
                },
                {
                  id: 2,
                  title: 'Игровые особенности',
                  cardContent: <RaceFeatures features={data?.features} />,
                },
                {
                  id: 3,
                  title: 'История',
                  cardContent: <RaceHistory raceHistory={data?.history} />,
                },
              ]}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <SectionModalContent>
      <Content />
    </SectionModalContent>
  );
};
