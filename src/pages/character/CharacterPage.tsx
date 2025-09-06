import { Section } from '@/components/wrappers/sections/section/Section';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { SubNavigation } from '@/components/wrappers/navigation/subNavigation/SubNavigation';
import { ROUTES } from '@/routes/routes';
import { getChildrenById } from '@/routes/helpers';

const MotionSection = motion.create(Section);

export const CharacterPage = () => {
  const routes = getChildrenById(ROUTES, 'character');

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      animate={{ opacity: 1 }}
      paddingY="medium"
      fixedWidth
      className="flex flex-col gap-4"
      screen>
      <SubNavigation data={routes} />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.4 }}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </MotionSection>
  );
};
