import { useGetClassesListQuery } from '@/features/classes/api';
import { ListCard } from '../ui/ListCard';
import { CharacterSection } from '../ui/CharacterSection';
import { ClassModalContent } from './ClassModalContent';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const ClassesPage = () => {
  const { isLoading, data: raceList, isError } = useGetClassesListQuery();

  return (
    <CharacterSection>
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
        <ClassModalContent />
      </AnimatedGridList>
    </CharacterSection>
  );
};
