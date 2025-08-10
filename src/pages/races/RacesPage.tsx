import { HoverZoomCard } from '@/components/shared/Cards/HoverZoomCard/HoverZoomCard';
import { ModalDialog } from '@/components/shared/ModalDialog/ModalDialog';
import { PageWithModal } from '@/components/shared/PageWIthModal/PageWIthModal';
import { Text } from '@/components/shared/Typography/Text';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
const data = Array.from({ length: 10 }, (_, i) => ({ key: i }));

export const RacesPage = () => {
  const navigate = useNavigate();

  return (
    <PageWithModal>
      <div className="flex flex-1 flex-col gap-8">
        <Text size="4xl">Расы и происхождения</Text>
        <div className="w-full flex gap-3 items-center">
          <Input placeholder="Поиск ..." className="flex-1" />
          <div className="max-w-content">
            <ModalDialog />
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={'asd'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
            {data.map(({ key }) => (
              <MotionHoverZoomCard
                key={key}
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => navigate(`${key}`)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWithModal>
  );
};
