import { useNavigate, useParams } from 'react-router-dom';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { OriginModal } from './components/OriginModal';
import { motion } from 'framer-motion';
export const OriginDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <ModalWindow
        key={id}
        contentClassname="w-full !max-w-[600px]"
        setOpen={() => navigate('/game/character/origins')}
        open={!!id}>
        <OriginModal />
      </ModalWindow>
    </motion.div>
  );
};
