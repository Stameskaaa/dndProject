import { useNavigate, useParams } from 'react-router-dom';
import type { Trait } from '@/features/traits/types';
import {
  cardVariants,
  MotionHoverZoomCard,
} from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Text } from '@/components/wrappers/typography/Text';

export const TraitCard = ({ traitData }: { traitData: Trait }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {traitData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
        {traitData.worlds.map(({ name, id }) => {
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
      active={id == traitData.id}
      title={<Title />}
      src={traitData.src}
      description={<Description />}
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => navigate(`${traitData.id}`)}
    />
  );
};
