import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollLock } from '@/features/scroll/hooks';
import { SHOW_TRANSITION } from '@/features/pageTransition/constants';
import { useAppSelector } from '@/hooks/reduxHooks';
import { PageLoaderIndex } from '@/constants/zIndex';
import { CubeLoader } from '../cubeLoader/CubeLoader';
import { useNavigation } from 'react-router-dom';

export const PageLoader = () => {
  const navigation = useNavigation();
  const { sectionLoading } = useAppSelector((state) => state.pageTransition);
  const [firstMount, setFirstMount] = useState(true);
  const showPageTransition = navigation.state === 'loading' || sectionLoading || firstMount;
  useScrollLock('SectionLoader', showPageTransition);

  useEffect(() => {
    setTimeout(() => {
      setFirstMount(false);
    }, SHOW_TRANSITION * 1000);
  }, []);

  return (
    <AnimatePresence>
      {showPageTransition && (
        <>
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
