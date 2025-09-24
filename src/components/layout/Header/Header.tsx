import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ROUTES } from '@/routes/routes';
import { findActiveInfo } from '@/routes/helpers';
import { HeaderIndex } from '@/constants/zIndex';
import { HeaderHeight } from '@/constants/heights';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { HeaderTitle } from './Components/headerTitle/HeaderTitle';
import { Section } from '@/components/wrappers/sections/section/Section';
import { HeaderNavigation } from './Components/headerNavigation/NavigationMenu';
import ScrollProgress from '@/components/wrappers/scrollProgress/ScrollProgress';
import { ToggleNavigation } from '@/components/wrappers/navigation/toggleNavigation/ToggleNavigation';
import { useAppSelector } from '@/hooks/reduxHooks';

const defaultClass =
  'z-1 flex w-full transition-all bg-brand-500 sticky top-0 duration-400 items-center flex-col';

export function Header() {
  const blockers = useAppSelector((state) => state.scrollLock.blockers);
  const [isScrolled, setIsScrolled] = useState<boolean | null>(true);
  const location = useLocation();
  const headerRef = useRef<null | HTMLDivElement>(null);
  const width = useWindowWidth();

  useEffect(() => {
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locationData = useMemo(() => {
    return findActiveInfo(ROUTES, location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      style={{ zIndex: HeaderIndex }}
      className={classNames(defaultClass, isScrolled ? '!bg-brand-400 shadow-xl' : '')}>
      <div style={{ height: HeaderHeight }} className="w-full shadow-xl flex justify-center">
        <Section fixedWidth={true} className="flex items-center justify-between py-4">
          <ScrollProgress />
          <HeaderTitle
            isScrolled={blockers.length > 0 ? true : isScrolled}
            locationData={locationData}
            headerRef={headerRef}
          />

          {width > 1024 ? (
            <HeaderNavigation />
          ) : (
            <div className="w-[20px] h-[20px]">
              <ToggleNavigation />
            </div>
          )}
        </Section>
      </div>
    </motion.div>
  );
}
