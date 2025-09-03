import { useForm } from 'react-hook-form';
import { RaceCard } from './components/raceCard/RaceCard';
import { SectionModal } from '@/components/wrappers/sections/sectionModal/SectionModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { raceMock } from '@/mock/mock';
import { Filters } from '../ui/Filters';

export const RacesPage = () => {
  const { control } = useForm();

  return (
    <SectionModal>
      <div className="flex flex-1 flex-col">
        <Filters inputName="name" control={control} />
        <AnimatedGridList isError={false} isLoading={false}>
          {Array.from({ length: 20 })?.map((_, i) => (
            <RaceCard key={i} raceData={raceMock} />
          ))}
        </AnimatedGridList>
      </div>
    </SectionModal>
  );
};
