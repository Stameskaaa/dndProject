import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../typography/Text';
import type { RouteNode } from '@/routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({
  i,
  data,
  toggle,
}: {
  i: number;
  data?: RouteNode;
  toggle: () => any;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const style = { border: `2px solid ${colors[i]}` };

  function getActivePath(fullPath: string) {
    if (fullPath === '/') {
      return fullPath === location.pathname;
    }
    return location.pathname.includes(fullPath);
  }

  return (
    <React.Fragment key={i}>
      <motion.li className="mb-[20px]" variants={variants}>
        <Text color="brand-100" size="xl">
          {data?.title}
        </Text>
      </motion.li>
      {data?.children?.map(({ title, fullPath }, i) => {
        const isActive = getActivePath(fullPath);
        return (
          <motion.li
            key={i}
            onClick={() => {
              toggle();
              navigate(fullPath);
            }}
            className="mb-[20px] flex items-center cursor-pointer"
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <div className="w-[40px] h-[40px] rounded-full flex mr-[20px]" style={style} />
            <Text color={isActive ? 'accent-100' : 'text-secondary'} size="lg">
              {title}
            </Text>
          </motion.li>
        );
      })}
    </React.Fragment>
  );
};
