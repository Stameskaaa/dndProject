import { useNavigate } from 'react-router-dom';
import type { Trait } from '@/features/traits/types';
import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';
import { Text } from '@/components/wrappers/typography/Text';
import { cardVariants } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const TraitCard = ({ traitData }: { traitData: Trait }) => {
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {traitData.name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 space-y-1 text-brand-100 text-md">
        {traitData?.worlds_data?.map(({ name }, i) => {
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
      // active={id == traitData.id}
      active={false}
      title={<Title />}
      description={<Description />}
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => navigate(`${traitData.id}`)}
    />
  );
};
