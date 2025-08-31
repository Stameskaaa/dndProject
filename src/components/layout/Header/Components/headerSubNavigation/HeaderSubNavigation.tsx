import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { filterNavigation, type ActiveRouteInfo } from '@/routes/helpers';
import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';

export const HeaderSubNavigation = ({ locationData }: { locationData: ActiveRouteInfo }) => {
  const navigate = useNavigate();

  const currentRoutes = filterNavigation(locationData?.parent?.children);
  const notRender =
    !locationData ||
    locationData?.nestedLevel < 4 ||
    !currentRoutes?.length ||
    currentRoutes?.length < 2;

  if (notRender) {
    return null;
  }

  return (
    <Section
      fixedWidth
      className="flex gap-2 md:gap-4 items-center h-[50px] overflow-x-auto scrollbar-hide">
      {currentRoutes.map(({ title, fullPath }, i) => {
        const isSelected = location.pathname.includes(fullPath);
        return (
          <motion.div
            key={`${i}`}
            initial=""
            onClick={() => {
              navigate(fullPath);
            }}
            className={classNames(
              'cursor-pointer relative h-full flex flex-col justify-center px-2 md:px-4',
            )}>
            <Text
              className="transition-colors text-md md:text-lg"
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
      className="w-full absolute right-0 h-1 bg-brand-200 bottom-0"
      layoutId="activeHeaderLine"></motion.div>
  );
};
