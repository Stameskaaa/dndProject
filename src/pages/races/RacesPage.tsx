import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useScroll } from './hooks';
import { useGetRaceListQuery } from '@/features/races/api';
import { HoverZoomCard } from '@/components/shared/Cards/HoverZoomCard/HoverZoomCard';
import { PageWithModal } from '@/components/shared/PageWIthModal/PageWIthModal';
import { ModalDialog } from '@/components/shared/ModalDialog/ModalDialog';
import { CubeLoader } from '@/components/shared/Loader/CubeLoader';
import { Text } from '@/components/shared/Typography/Text';
import { HeaderHeight } from '@/constants/heights';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};
const MotionHoverZoomCard = motion.create(HoverZoomCard);

export const RacesPage = () => {
  const isScrolled = useScroll();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data: raceList } = useGetRaceListQuery();

  if (isLoading) {
    return <CubeLoader />;
  }

  return (
    <PageWithModal>
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
              <ModalDialog button={<Button>фильтры</Button>} />
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          <motion.div
            key={'asd'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWithModal>
  );
};
