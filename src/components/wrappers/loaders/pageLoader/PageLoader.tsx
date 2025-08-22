import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollLock } from '@/features/scroll/hooks';
import { SHOW_TRANSITION } from '@/features/pageTransition/constants';
import { setSection } from '@/features/pageTransition/pageTransitionSlice';
import { useAppSelector } from '@/hooks/reduxHooks';
import { PageLoaderIndex } from '@/constants/zIndex';
import { CubeLoader } from '../cubeLoader/CubeLoader';
import { TransitionTimer } from '../../sections/sectionTransition/TransitionTimer';

export const PageLoader = () => {
  const dispatch = useDispatch();
  const { sectionLoading, sectionTimer } = useAppSelector((state) => state.pageTransition);
  const [firstMount, setFirstMount] = useState(true);
  const showPageTransition = firstMount || sectionTimer || sectionLoading;
  useScrollLock('SectionLoader', showPageTransition);

  useEffect(() => {
    dispatch(setSection({ type: 'timer', value: true }));
    setFirstMount(false);
  }, []);

  return (
    <AnimatePresence>
      {showPageTransition && (
        <>
          <TransitionTimer />
          <motion.div
            style={{ zIndex: PageLoaderIndex }}
            initial={{ y: firstMount ? 0 : '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: SHOW_TRANSITION, ease: 'anticipate' }}
            className="grid place-items-center fixed bottom-0 left-0 w-screen h-[calc(100vh+60px)] bg-brand-400 px-6 py-4">
            <CubeLoader />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
