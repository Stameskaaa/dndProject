import { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { filterSubNavigation } from '@/routes/helpers';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const HeaderSubNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationData = filterSubNavigation(location.pathname);

  if (navigationData.items.length === 0) {
    return null;
  }

  return (
    <Section fixedWidth className="flex gap-4 items-center h-[50px] overflow-x-auto">
      {navigationData.items.map(({ title, id, fullPath }) => {
        const isSelected = location.pathname.includes(fullPath);
        return (
          <motion.div
            key={`${id}`}
            initial=""
            onClick={() => {
              navigate(fullPath);
            }}
            className={classNames(
              'rounded-2xl cursor-pointer relative h-full flex flex-col justify-center p-x',
            )}>
            <Text
              className="transition-colors"
              color={isSelected ? 'text-primary' : 'text-secondary'}>
              {title}
            </Text>
            {isSelected && <ActiveLine />}
          </motion.div>
        );
      })}
    </Section>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      className="w-full absolute h-1 bg-brand-200 bottom-0"
      layoutId="activeHeaderLine"></motion.div>
  );
};
