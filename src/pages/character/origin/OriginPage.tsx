import { useForm } from 'react-hook-form';
import { useGetOriginsListQuery } from '@/features/origin/api';
import { Filters } from '../ui/Filters';
import { OriginCard } from './components/OriginCard';
import { arrayIsValid } from '@/helpers/arrayHelpers';
import { OriginModal } from './components/OriginModal';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const OriginPage = () => {
  const { data: originData, isLoading, isError } = useGetOriginsListQuery();
  const { control } = useForm();

  return (
    <CharacterSection>
      <Filters control={control} inputName="name" />
      <AnimatedGridList isLoading={isLoading} isError={isError}>
        {arrayIsValid(originData) &&
          originData?.map((data) => <OriginCard key={data.id} originData={data} />)}
      </AnimatedGridList>
      <OriginModal />
    </CharacterSection>
  );
};
