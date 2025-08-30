import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useGetRaceListQuery } from '@/features/races/api';
import { usePageTransitionLoading } from '@/features/pageTransition/hooks';
import { useScroll } from './hooks';
import { Input } from '@/components/ui/input';
import { HeaderHeight } from '@/constants/heights';
import { RaceCard } from './components/raceCard/RaceCard';
import { Text } from '@/components/wrappers/typography/Text';
import { RaceFilters } from './components/raceFilters/RaceFilters';
import { SectionModal } from '@/components/wrappers/sections/sectionModal/SectionModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const RacesPage = () => {
  const isScrolled = useScroll();
  const { isLoading, data: raceList, isError } = useGetRaceListQuery();
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
        <AnimatedGridList isError={isError} isLoading={isLoading}>
          {raceList?.map((data) => (
            <RaceCard key={data.id} raceData={data} />
          ))}
        </AnimatedGridList>
      </div>
    </SectionModal>
  );
};
