import { useNavigate, useParams } from 'react-router-dom';
import {
  cardTransition,
  cardVariants,
} from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import { Text } from '@/components/wrappers/typography/Text';
import { MotionHoverZoomCard } from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';

interface ListCardProps {
  name: string;
  cardId: string;
  src: string;
  description: string[];
}

export const ListCard: React.FC<ListCardProps> = ({ name, src, description, cardId }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Title = () => (
    <Text color="text-primary" size="lg">
      {name}
    </Text>
  );

  const Description = () => {
    return (
      <ul className="list-disc pl-5 text-brand-100 text-md">
        {description.map((value, i) => {
          return (
            <li key={i}>
              <Text size="sm" color="text-secondary">
                {value}
              </Text>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <MotionHoverZoomCard
      active={id == cardId}
      title={<Title />}
      src={src}
      description={<Description />}
      variants={cardVariants}
      transition={cardTransition}
      onClick={() => navigate(`${cardId}`)}
    />
  );
};
