import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    style={{ overscrollBehavior: 'contain' }}
    className="p-[25px] absolute top-[50px] width-[230px] h-[calc(100%-50px)] overflow-auto"
    variants={variants}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);
