import { motion, type Variants } from 'framer-motion';

export const HeaderTitle = ({
  title,
  titleAnimate = false,
  isScrolled,
}: {
  title: string;
  titleAnimate?: boolean;
  isScrolled?: boolean;
}) => {
  const variants: Variants = {
    initial: {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(1)',
      position: 'fixed',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    animate: {
      left: 'auto',
      top: 'auto',
      transform: 'translate(0, 0) scale(0.5)',
      position: 'fixed',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.h1
      initial={false}
      animate={titleAnimate ? (isScrolled ? 'animate' : 'initial') : 'animate'}
      variants={variants}
      style={{
        fontSize: 60,
        fontFamily: 'Cinzel',
        whiteSpace: 'pre-wrap',
      }}
      className="text-center leading-none bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent">
      {title}
    </motion.h1>
  );
};
