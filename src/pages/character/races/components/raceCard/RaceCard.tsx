import { useNavigate, useParams } from 'react-router-dom';
import type { Race } from '@/features/races/types';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { Text } from '@/components/wrappers/typography/Text';
import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { useId } from 'react';

export const RaceCard = ({ raceData }: { raceData: Race }) => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  // TODO Для анимации
  const id = useId();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {raceData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 text-brand-100 text-md">
        {raceData?.world_data?.map(({ name, id }) => {
          return (
            <li key={id}>
              <Text size="sm" color="text-secondary">
                {name}
              </Text>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <MotionHoverZoomCard
      active={false}
      title={<Title />}
      src={raceData.src}
      description={<Description />}
      variants={cardVariants}
      transition={cardTransition}
      onClick={() => {
        paramsId !== id && navigate(`${id}`);
      }}
    />
  );
};
