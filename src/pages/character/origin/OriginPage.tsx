import { useGetOriginsListQuery } from '@/features/origin/api';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { OriginCard } from './components/OriginCard';
import { OriginModal } from './components/OriginModal';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const OriginPage = () => {
  const { data: originData, isLoading, isError } = useGetOriginsListQuery();

  return (
    <CharacterSection>
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(originData) &&
          originData?.map((data) => <OriginCard key={data.id} originData={data} />)}
      </AnimatedGridList>
      <OriginModal />
    </CharacterSection>
  );
};
