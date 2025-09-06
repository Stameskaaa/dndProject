import { useForm } from 'react-hook-form';
import { Filters } from '../ui/Filters';
import { ListCard } from '../ui/ListCard';
import { ClassModalContent } from './ClassModalContent';
import { CharacterSection } from '../ui/CharacterSection';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { mockClass } from '@/features/classes/mock';

export const ClassesPage = () => {
  const { control } = useForm();

  return (
    <CharacterSection>
      <Filters control={control} inputName="name" />
      <AnimatedGridList isError={false} isLoading={false}>
        {Array.from({ length: 20 })?.map((_, i) => (
          <ListCard
            key={i}
            cardId={`${i}`}
            name={mockClass.name}
            src={mockClass.src}
            description={mockClass?.worlds_data?.map(({ name }) => name) || []}
          />
        ))}
      </AnimatedGridList>
      <ClassModalContent />
    </CharacterSection>
  );
};
