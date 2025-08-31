import { useForm } from 'react-hook-form';
import { useGetTraitsListQuery } from '@/features/traits/api';
import { Filters } from '../ui/Filters';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { TraitCard } from './components/TraitCard';
import { TraitsModal } from './components/TraitsModal';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

const traitSelector = {
  name: 'types',
  label: 'Выберите тип черты',
  options: [
    {
      id: '1',
      value: 'Происхождение',
    },
    {
      id: '2',
      value: 'Боевые стили',
    },
    {
      id: '3',
      value: 'Эпические',
    },
    {
      id: '4',
      value: 'Общие',
    },
  ],
};

export const TraitsPage = () => {
  const { data: traitData, isLoading, isError } = useGetTraitsListQuery();
  const { control } = useForm();

  return (
    <CharacterSection>
      <Filters selectors={[traitSelector]} control={control} inputName="name" />
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(traitData) &&
          traitData?.map((data) => <TraitCard key={data.id} traitData={data} />)}
      </AnimatedGridList>
      <TraitsModal />
    </CharacterSection>
  );
};
