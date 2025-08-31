import { useGetTraitsListQuery } from '@/features/traits/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { TraitCard } from './components/TraitCard';
import { TraitsModal } from './components/TraitsModal';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const TraitsPage = () => {
  const { data: traitData, isLoading, isError } = useGetTraitsListQuery();

  return (
    <CharacterSection>
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(traitData) &&
          traitData?.map((data) => <TraitCard key={data.id} traitData={data} />)}
      </AnimatedGridList>
      <TraitsModal />
    </CharacterSection>
  );
};
