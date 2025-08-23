import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetRaceListQuery } from '@/features/races/api';
import { usePageTransitionLoading } from '@/features/pageTransition/hooks';
import { useScroll } from './hooks';
import { Input } from '@/components/ui/input';
import { HeaderHeight } from '@/constants/heights';
import { RaceFilters } from './raceFilters/RaceFilters';
import { Text } from '@/components/wrappers/typography/Text';
import { SectionModal } from '@/components/wrappers/sections/sectionModal/SectionModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';
import {
  cardVariants,
  MotionHoverZoomCard,
} from '@/components/wrappers/cards/hoverZoomCard/HoverZoomCard';

export const RacesPage = () => {
  const isScrolled = useScroll();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data: raceList } = useGetRaceListQuery();
  usePageTransitionLoading(isLoading);

  return (
    <SectionModal>
      <div className="flex flex-1 flex-col gap-8">
        <motion.div
          style={{ top: HeaderHeight, zIndex: 1 }}
          className={classNames(`flex flex-col gap-4 sticky !py-3 bg-brand-500`)}
          // TODO обдумать
          animate={{
            padding: isScrolled ? '0 20px 20px 20px' : '0px',
            borderRadius: `0 0 10px 10px`,
          }}
          transition={{ duration: 0.3 }}>
          <Text size="4xl">Расы и происхождения</Text>
          <div className="w-full flex gap-3 items-center">
            <Input placeholder="Поиск ..." className="flex-1" />
            <div className="max-w-content">
              <RaceFilters />
            </div>
          </div>
        </motion.div>
        <AnimatedGridList isLoading={isLoading}>
          {/* TODO когда будут все подобные страницы вынести в компонент AnimatedGridList */}
          {raceList?.map(({ id: raceId, name, description, src }) => (
            <MotionHoverZoomCard
              active={Number(id) === raceId}
              key={raceId}
              name={name}
              src={src}
              description={description}
              variants={cardVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => navigate(`${raceId}`)}
            />
          ))}
        </AnimatedGridList>
      </div>
    </SectionModal>
  );
};
