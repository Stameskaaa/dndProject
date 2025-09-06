import { useNavigate } from 'react-router-dom';
import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Text } from '@/components/wrappers/typography/Text';
import type { Origin } from '@/features/origin/types';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const OriginCard = ({ originData }: { originData: Origin }) => {
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {originData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
        {originData?.world_data?.map(({ name }, i) => {
          return (
            <li key={i}>
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
      // active={id == originData.id}
      active={false}
      title={<Title />}
      src={originData.src}
      description={<Description />}
      variants={cardVariants}
      transition={cardTransition}
      onClick={() => navigate(`${originData.id}`)}
    />
  );
};
