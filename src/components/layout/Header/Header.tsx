import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HeaderTitle } from './Components/HeaderTitle';
import { HeaderNavigation } from './Components/HeaderNavigation/NavigationMenu';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { ToggleNavigation } from '@/components/shared/ToggleNavigation/ToggleNavigation';

export function Header({ titleAnimate = false, title }: { titleAnimate?: boolean; title: string }) {
  const width = useWindowWidth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={
        `z-1 flex w-full transition-all p-4 sticky top-0 duration-500` +
        (isScrolled ? ' bg-brand-400 shadow-md' : '')
      }>
      <div className="flex items-center w-full max-w-[var(--width-max-container)] justify-between mx-auto">
        <div className="grid items-center w-[400px] h-[40px] relative">
          <HeaderTitle titleAnimate={titleAnimate} isScrolled={isScrolled} title={title} />
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
