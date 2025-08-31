import { useForm } from 'react-hook-form';
import { useGetClassesListQuery } from '@/features/classes/api';
import { Filters } from '../ui/Filters';
import { ListCard } from '../ui/ListCard';
import { ClassModalContent } from './ClassModalContent';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const ClassesPage = () => {
  const { isLoading, data: raceList, isError } = useGetClassesListQuery();
  const { control } = useForm();

  return (
    <CharacterSection>
      <Filters control={control} inputName="name" />
      <AnimatedGridList isError={isError} isLoading={isLoading}>
        {raceList?.map(({ id, name, description, src }) => (
          <ListCard
            key={id}
            cardId={String(id)}
            name={name}
            src={src}
            description={[description]}
          />
        ))}
      </AnimatedGridList>
      <ClassModalContent />
    </CharacterSection>
  );
};
