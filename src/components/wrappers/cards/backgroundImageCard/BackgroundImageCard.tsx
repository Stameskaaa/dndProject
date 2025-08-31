import { motion } from 'framer-motion';
import { Text } from '../../typography/Text';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const MotionCard = motion.create(Card);

export const BackgroundImageCard = ({
  src,
  title,
  text,
}: {
  src: string;
  title: String;
  text: string;
}) => {
  return (
    <MotionCard
      whileHover={{
        y: -14,
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer border-2 w-[400px] h-[500px] border-brand-200 bg-brand-400  text-text-primary p-0  transition-colors duration-300">
      <CardContent className="rounded-tl-[16px] rounded-tr-[16px] h-[350px] p-0 relative overflow-hidden flex items-end">
        <div
          style={{
            backgroundImage: `linear-gradient(to top, #1c2224, transparent 70%), url(${src})`,
          }}
          className="absolute inset-0 bg-center bg-cover flex">
          <div className="flex justify-around mb-3 w-full mt-auto items-center">
            <Text color="accent-100" size="2xl">
              {title}
            </Text>
            <Text color="accent-100"> Иконка</Text>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto h-[150px] pb-4 ">
        <Text className="line-clamp-[4] overflow-hidden" color="brand-100">
          {text}
        </Text>
      </CardFooter>
    </MotionCard>
  );
};
