import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useGetRaceListQuery } from '@/features/races/api';
import { useScroll } from './hooks';
import { RaceCard } from './components/raceCard/RaceCard';
import { Input } from '@/components/wrappers/forms/input/Input';
import { HeaderHeight, HeaderSubNavHeight } from '@/constants/heights';
import { SectionModal } from '@/components/wrappers/sections/sectionModal/SectionModal';
import { AnimatedGridList } from '@/components/wrappers/lists/AnimatedGridList/AnimatedGridList';

export const RacesPage = () => {
  const isScrolled = useScroll();
  const { control } = useForm();
  const { isLoading, data: raceList, isError } = useGetRaceListQuery();
  const height = HeaderHeight + HeaderSubNavHeight;

  return (
    <SectionModal>
      <div className="flex flex-1 flex-col gap-8">
        <motion.div
          style={{ top: height, zIndex: 1 }}
          className={classNames(`flex flex-col gap-4 sticky !py-3 bg-brand-500`)}
          // TODO обдумать
          animate={{
            padding: isScrolled ? '0 20px 20px 20px' : '0px',
            borderRadius: `0 0 10px 10px`,
          }}
          transition={{ duration: 0.3 }}>
          <div className="w-full flex gap-3 items-center">
            <Input control={control} name="name" placeholder="Поиск ..." className="flex-1" />
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
