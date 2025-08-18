import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CubeLoader } from '../../wrappers/loaders/cubeLoader/CubeLoader';

export const SectionLoader = ({
  show,
  status = 'auto',
  setShow,
}: {
  show: boolean;
  status?: 'auto' | 'controlled';
  setShow?: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (status === 'controlled') return;
    const timer = setTimeout(() => {
      setShow?.(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
            className="grid place-items-center fixed bottom-0 left-0 w-screen h-[calc(100vh+60px)] bg-brand-400 px-6 py-4  z-50">
            <CubeLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
