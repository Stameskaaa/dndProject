import {
  cardVariants,
  MotionHoverZoomCard,
} from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { useGetClassesListQuery } from '@/features/classes/api';
import { Text } from '@/components/wrappers/typography/Text';
import { ClassModalContent } from './ClassModalContent';

export const ClassesPage = () => {
  const { isLoading, data: raceList } = useGetClassesListQuery();

  return (
    <Section fixedWidth screen>
      <Text size="4xl">Классы</Text>
      <AnimatedGridList isLoading={isLoading}>
        {/* TODO когда будут все подобные страницы вынести в компонент AnimatedGridList */}
        {raceList?.map(({ id, name, description, src }) => (
          <ModalWindow
            key={id}
            button={
              <MotionHoverZoomCard
                name={name}
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
