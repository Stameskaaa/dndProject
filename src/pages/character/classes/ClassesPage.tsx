import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { mockClass } from '@/features/classes/mock';
import { Filters } from '../ui/Filters';
import { ListCard } from '../ui/ListCard';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const ClassesPage = () => {
  const { control } = useForm();

  return (
    <>
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
      <Outlet />
    </>
  );
};
