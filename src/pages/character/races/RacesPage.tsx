import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { raceMock } from '@/features/races/mock';
import { Filters } from '../ui/Filters';
import { RaceCard } from './components/RaceCard';
import { useNavigatePath } from '@/hooks/useNavigatePath';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const RacesPage = () => {
  const { control } = useForm();
  const { navigatePath } = useNavigatePath();

  return (
    <>
      <Filters inputName="name" control={control} />
      <AnimatedGridList isError={false} isLoading={false}>
        {Array.from({ length: 20 })?.map((_, i) => (
          <RaceCard
            openModal={() => {
              navigatePath('13');
            }}
            key={i}
            raceData={raceMock}
          />
        ))}
      </AnimatedGridList>
      <Outlet />
    </>
  );
};
