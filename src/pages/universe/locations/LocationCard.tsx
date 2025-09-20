import { motion } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useNavigatePath } from '@/hooks/useNavigatePath';

const MotionCard = motion.create(Card);

export const LocationCard = ({
  src,
  name,
  description,
}: {
  src: string;
  name: String;
  description: string;
}) => {
  const { navigatePath } = useNavigatePath();

  return (
    <MotionCard
      onClick={() => navigatePath('/universe/locations/3')}
      className="cursor-pointer border-2 border-brand-300 h-[500px] bg-brand-400 gap-0 p-0 transition-colors duration-300">
      <CardContent className="rounded-tl-[16px] rounded-tr-[16px] h-[350px] p-0 relative overflow-hidden flex items-end">
        <div
          style={{
            backgroundImage: `linear-gradient(to top, #1c2224, transparent 100%), url(${src})`,
          }}
          className="absolute inset-0 bg-center bg-cover flex"></div>
      </CardContent>

      <CardFooter className="mt-auto h-[200px] pb-4 flex flex-col items-start gap-2">
        <Text color="brand-100" size="2xl">
          {name}
        </Text>
        <Text color="text-description" className="line-clamp-[4] overflow-hidden">
          {description}
        </Text>
      </CardFooter>
    </MotionCard>
  );
};
