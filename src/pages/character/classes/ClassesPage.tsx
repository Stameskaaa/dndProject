import { useGetRaceListQuery } from '@/features/races/api';
import {
  cardVariants,
  MotionHoverZoomCard,
} from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const ClassesPage = () => {
  const { isLoading, data: raceList } = useGetRaceListQuery();

  return (
    <Section fixedWidth screen>
      <AnimatedGridList isLoading={isLoading}>
        {/* TODO когда будут все подобные страницы вынести в компонент AnimatedGridList */}

        {raceList?.map(({ id: raceId, name, description, src }) => (
          <ModalWindow
            button={
              <MotionHoverZoomCard
                key={raceId}
                name={name}
                src={src}
                description={description}
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            }></ModalWindow>
        ))}
      </AnimatedGridList>
    </Section>
  );
};
