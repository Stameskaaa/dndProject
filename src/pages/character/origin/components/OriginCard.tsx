import { useNavigate, useParams } from 'react-router-dom';
import {
  cardVariants,
  MotionHoverZoomCard,
} from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Text } from '@/components/wrappers/typography/Text';
import type { Origin } from '@/features/origin/types';

export const OriginCard = ({ originData }: { originData: Origin }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {originData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
        {originData.worlds?.map(({ name, id }) => {
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
      active={id == originData.id}
      title={<Title />}
      src={originData.src}
      description={<Description />}
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => navigate(`${originData.id}`)}
    />
  );
};
