import { useNavigate, useParams } from 'react-router-dom';
import type { Race } from '@/features/races/types';
import { Text } from '@/components/wrappers/typography/Text';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';

export const RaceCard = ({ raceData }: { raceData: Race }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {raceData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
        {raceData.worlds.map(({ name, id }) => {
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
      active={id == raceData.id}
      title={<Title />}
      src={raceData.src}
      description={<Description />}
      variants={cardVariants}
      transition={cardTransition}
      onClick={() => navigate(`${raceData.id}`)}
    />
  );
};
