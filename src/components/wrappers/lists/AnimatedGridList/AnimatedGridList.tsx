import classNames from 'classnames';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../../typography/Text';
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
  isError,
  minW = 250,
  gap = 4,
}: {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  minW?: number;
  gap?: number;
}) => {
  if (!isLoading && isError) {
    return <Text>Произошла ошибка, вернуться на главную</Text>;
  }
  // TODO

  return (
    <AnimatePresence>
      {isLoading ? (
        <CubeLoader className="m-auto" />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={classNames('w-full grid justify-items-center')}
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${minW}px, 1fr))`,
            gap: `${gap * 0.25}rem`, // потому что gap-4 = 1rem
          }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
