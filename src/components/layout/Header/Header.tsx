import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AnimatedHeaderTitle, HeaderTitle } from './Components/HeaderTitle';
import { HeaderNavigation } from './Components/HeaderNavigation/NavigationMenu';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { ToggleNavigation } from '@/components/wrappers/navigation/toggleNavigation/ToggleNavigation';
import classNames from 'classnames';
import { defaultPaddings } from '@/constants/paddings';
import { HeaderHeight } from '@/constants/heights';
import { HeaderIndex } from '@/constants/zIndex';

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
      style={{ zIndex: HeaderIndex, height: HeaderHeight }}
      className={classNames(
        `z-1 flex w-full transition-all py-4 sticky top-0 duration-200 justify-center`,
        isScrolled ? 'bg-brand-400 shadow-xl' : '',
      )}>
      <div
        className={classNames(
          'flex items-center w-full max-w-[var(--width-max-container)] justify-between',
          defaultPaddings,
        )}>
        <div ref={headerRef} className="grid items-center w-[230px] h-[40px]">
          {isScrolled !== null &&
            headerRef.current &&
            (titleAnimate ? (
              <AnimatedHeaderTitle parentRef={headerRef} isScrolled={!!isScrolled} title={title} />
            ) : (
              <HeaderTitle title={title} />
            ))}
        </div>

        {width > 1024 ? (
          <HeaderNavigation />
        ) : (
          <div className="w-[20px] h-[20px]">
            <ToggleNavigation />
          </div>
        )}
      </div>
    </motion.div>
  );
}
