import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { HeaderIndex } from '@/constants/zIndex';
import { Section } from '@/components/wrappers/sections/section/Section';
import { AnimatedHeaderTitle, HeaderTitle } from './Components/HeaderTitle';
import { HeaderNavigation } from './Components/headerNavigation/NavigationMenu';
import { ToggleNavigation } from '@/components/wrappers/navigation/toggleNavigation/ToggleNavigation';
import ScrollProgress from '@/components/wrappers/scrollProgress/ScrollProgress';
import { HeaderSubNavigation } from './Components/headerSubNavigation/HeaderSubNavigation';

export function Header({ titleAnimate = false, title }: { titleAnimate?: boolean; title: string }) {
  const [isScrolled, setIsScrolled] = useState<boolean | null>(null);
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

  return (
    <motion.div
      // style={{ zIndex: HeaderIndex, height: HeaderHeight }}
      style={{ zIndex: HeaderIndex, height: 'auto' }}
      className={classNames(
        `z-1 flex w-full transition-all bg-brand-500 sticky top-0 duration-400 items-center flex-col`,
        isScrolled ? '!bg-brand-400 shadow-xl' : '',
      )}>
      <div className="w-full shadow-xl flex justify-center">
        <Section fixedWidth={true} className="flex items-center justify-between py-4">
          <ScrollProgress />
          <div ref={headerRef} className="grid items-center w-[230px] h-[40px]">
            {isScrolled !== null &&
              headerRef.current &&
              (titleAnimate ? (
                <AnimatedHeaderTitle
                  parentRef={headerRef}
                  isScrolled={!!isScrolled}
                  title={title}
                />
              ) : (
                <HeaderTitle>{title}</HeaderTitle>
              ))}
          </div>

          {width > 1024 ? (
            <HeaderNavigation />
          ) : (
            <div className="w-[20px] h-[20px]">
              <ToggleNavigation />
            </div>
          )}
        </Section>
      </div>

      <HeaderSubNavigation />
    </motion.div>
  );
}
