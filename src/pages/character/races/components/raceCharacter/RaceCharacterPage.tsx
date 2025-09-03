import { Expand, Shrink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RaceFeatures } from './components/RaceFeatures';
import { Text } from '@/components/wrappers/typography/Text';
import { Tabs } from '@/components/wrappers/navigation/tabs/Tabs';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';
import { SectionModalContent } from '@/components/wrappers/sections/sectionModal/SectionModalContent';
import { raceMock } from '@/mock/mock';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';

interface RaceCharacterPageProps {
  isModal?: boolean;
  closeModal?: () => {};
  fullModal?: () => {};
  isModalLocked?: boolean;
}

export const RaceCharacterPage = () => {
  return (
    <SectionModalContent>
      <Content />
    </SectionModalContent>
  );
};

const Content: React.FC<RaceCharacterPageProps> = ({
  closeModal,
  fullModal,
  isModal,
  isModalLocked,
}) => {
  return false ? (
    <CubeLoader />
  ) : (
    <div className="px-4 py-8 h-full relative">
      {!raceMock ? (
        <Text>Произошла ошибочка</Text>
      ) : (
        <>
          <div className="flex p-1 min-w-[200px] bg-brand-400 shadow-md shadow-black rounded-md justify-between  items-center gap-4 absolute left-10 top-[-18px]">
            {!isModalLocked ? (
              <Button size="sm" variant="ghost" onClick={fullModal}>
                {isModal ? <Shrink /> : <Expand />}
              </Button>
            ) : (
              <div />
            )}
            <Text size="lg">{raceMock?.name}</Text>
            <Button size="sm" variant="ghost" onClick={closeModal}>
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
                cardContent: <MarkDownText>{raceMock?.md_description || ''}</MarkDownText>,
              },
              {
                id: 2,
                title: 'Игровые особенности',
                cardContent: <RaceFeatures features={raceMock?.features} />,
              },
              {
                id: 3,
                title: 'История',
                cardContent: <MarkDownText>{raceMock?.md_history || ''}</MarkDownText>,
              },
            ]}
          />
        </>
      )}
    </div>
  );
};
