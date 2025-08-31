import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import {
  AnimatedGridList,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { useGetClassesListQuery } from '@/features/classes/api';
import { ClassModalContent } from './ClassModalContent';

export const ClassesPage = () => {
  const { isLoading, data: raceList, isError } = useGetClassesListQuery();

  return (
    <Section paddingY="medium" fixedWidth screen>
      <AnimatedGridList isError={isError} isLoading={isLoading}>
        {/* TODO когда будут все подобные страницы вынести в компонент AnimatedGridList */}
        {raceList?.map(({ id, name, description, src }) => (
          <ModalWindow
            key={id}
            buttonTrigger={
              <MotionHoverZoomCard
                title={name}
                src={src}
                description={description}
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            }>
            <ClassModalContent />
          </ModalWindow>
        ))}
      </AnimatedGridList>
    </Section>
  );
};
