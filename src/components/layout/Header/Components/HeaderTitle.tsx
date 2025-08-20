import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeaderTitleProps {
  title: string;
  isScrolled?: boolean;
}

const debounceMs = 50;

export const HeaderTitle = ({ title, isScrolled }: HeaderTitleProps) => {
  const controls = useAnimation();
  const [centerPos, setCenterPos] = useState({
    top: window.innerHeight / 2,
    left: window.innerWidth / 2,
  });
  const [debouncedScrolled, setDebouncedScrolled] = useState(isScrolled);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setCenterPos({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedScrolled(isScrolled), debounceMs);
    return () => clearTimeout(timer);
  }, [isScrolled]);

  useEffect(() => {
    const config = {
      top: debouncedScrolled ? 0 : centerPos.top,
      left: debouncedScrolled ? 0 : centerPos.left,
      scale: debouncedScrolled ? 0.5 : 1,
      x: debouncedScrolled ? 0 : '-50%',
      y: debouncedScrolled ? 0 : '-50%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    };

    if (!mounted) {
      controls.set(config as any);
      setMounted(true);
    } else {
      controls.start(config as any);
    }
  }, [debouncedScrolled, centerPos, controls, mounted]);

  return (
    <motion.h1
      initial={false}
      animate={controls}
      style={{
        fontSize: 60,
        fontFamily: 'Cinzel',
        whiteSpace: 'pre-wrap',
      }}
      className="text-center leading-[50px] w-max absolute bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent">
      {title}
    </motion.h1>
  );
};
