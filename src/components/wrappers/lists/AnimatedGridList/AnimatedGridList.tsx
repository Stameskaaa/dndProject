import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CubeLoader } from '../../loaders/cubeLoader/CubeLoader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const AnimatedGridList = ({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) => {
  return (
    <AnimatePresence>
      {isLoading ? (
        <CubeLoader className="m-auto" />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
