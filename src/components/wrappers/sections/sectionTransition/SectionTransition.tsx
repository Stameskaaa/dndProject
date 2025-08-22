import { AnimatePresence, motion } from 'framer-motion';
import { useScrollLock } from '@/features/scroll/hooks';
import { MIN_SHOW_TIMER, SHOW_TRANSITION } from '@/features/pageTransition/constants';
import { useAppSelector } from '@/hooks/reduxHooks';
import { TransitionTimer } from './TransitionTimer';
import { CubeLoader } from '../../loaders/cubeLoader/CubeLoader';

export const SectionTransition = () => {
  const isPageLoading = useAppSelector((state) => state.pageTransition.sectionLoading);
  const finished = TransitionTimer({ duration: MIN_SHOW_TIMER });
  const showPageTransition = finished && !isPageLoading;

  useScrollLock('SectionLoader');

  return (
    <AnimatePresence>
      {showPageTransition && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: SHOW_TRANSITION, ease: 'anticipate' }}
          className="grid place-items-center fixed bottom-0 left-0 w-screen h-[calc(100vh+60px)] bg-brand-400 px-6 py-4 z-50">
          <CubeLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
