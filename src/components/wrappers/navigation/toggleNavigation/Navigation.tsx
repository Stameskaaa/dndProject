import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { HEADER_DISABLED_IDS, ROUTES } from '@/routes/routes';

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: () => any }) => {
  const filteredRoutes = ROUTES[0]?.children?.filter(
    ({ id }) => !(id && HEADER_DISABLED_IDS.includes(id)),
  );

  return (
    <motion.ul
      style={{ overscrollBehavior: 'contain' }}
      className="p-[25px] absolute w-full top-[50px] h-[calc(100%-50px)] overflow-auto pb-18"
      variants={variants}>
      {filteredRoutes?.map((data, i) => (
        <MenuItem toggle={toggle} data={data} i={i} key={i} />
      ))}
    </motion.ul>
  );
};
