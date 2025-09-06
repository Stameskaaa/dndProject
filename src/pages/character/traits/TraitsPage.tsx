import { useForm } from 'react-hook-form';
import { Filters } from '../ui/Filters';
import { TraitCard } from './components/TraitCard';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { trait_types } from '@/mock/mock';
import { traitMock } from '@/features/traits/mock';
import { Outlet } from 'react-router-dom';

const traitSelector = {
  name: 'types',
  label: 'Черты',
  placeholder: 'Выберите черту',
  options: trait_types.map(({ id, name }) => ({ id, value: name })),
};

export const TraitsPage = () => {
  const { control } = useForm();

  return (
    <>
      <Filters selectors={[traitSelector]} control={control} inputName="name" />
      <AnimatedGridList isLoading={false} isError={false}>
        {
          // arrayIsValid(traitData) &&
          Array.from({ length: 20 })?.map((_, i) => (
            <TraitCard key={i} traitData={traitMock} />
          ))
        }
      </AnimatedGridList>
      <Outlet />
    </>
  );
};
