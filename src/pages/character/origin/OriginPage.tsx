import { useForm } from 'react-hook-form';
import { Filters } from '../ui/Filters';
import { OriginCard } from './components/OriginCard';
import { OriginModal } from './components/OriginModal';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { originMock } from '@/mock/mock';

export const OriginPage = () => {
  // const { data: originData, isLoading, isError } = useGetOriginsListQuery();
  const { control } = useForm();

  return (
    <CharacterSection>
      <Filters control={control} inputName="name" />
      <AnimatedGridList isLoading={false} isError={false}>
        {
          // arrayIsValid(originData) &&
          Array.from({ length: 20 })?.map((_, i) => (
            <OriginCard key={i} originData={originMock} />
          ))
        }
      </AnimatedGridList>
      <OriginModal />
    </CharacterSection>
  );
};
