import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, type RefObject } from 'react';

interface HeaderTitleProps {
  title: string;
  parentRef: RefObject<HTMLDivElement | null>;
  isScrolled?: boolean;
}

interface Positions {
  start: { top: number; left: number };
}

const debounceMs = 50;

export const AnimatedHeaderTitle = ({ title, parentRef, isScrolled }: HeaderTitleProps) => {
  const controls = useAnimation();
  const [positions, setPositions] = useState<Positions>({
    start: { top: 0, left: 0 },
  });

  const [debouncedScrolled, setDebouncedScrolled] = useState(isScrolled);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const calculatePositions = () => {
      let start = { top: 0, left: 0 };
      if (parentRef.current) {
        const rect = parentRef.current.getBoundingClientRect();
        start = {
          top: rect.top + rect.height / 2,
          left: rect.left,
        };
      }
      setPositions({ start });
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedScrolled(isScrolled), debounceMs);
    return () => clearTimeout(timer);
  }, [isScrolled]);

  useEffect(() => {
    const config = {
      top: debouncedScrolled ? positions.start.top : window.innerHeight / 2,
      left: debouncedScrolled ? positions.start.left : window.innerWidth / 2,
      scale: debouncedScrolled ? 0.5 : 1,
      x: debouncedScrolled ? 0 : '-50%',
      y: '-50%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    };

    if (!mounted) {
      controls.set(config as any);
      setMounted(true);
    } else {
      controls.start(config as any);
    }
  }, [debouncedScrolled, positions, controls, mounted]);

  return (
    <motion.h1
      initial={false}
      animate={controls}
      style={{
        fontFamily: 'Cinzel',
        whiteSpace: 'pre-wrap',
        transformOrigin: 'left',
      }}
      className="text-center leading-[50px] w-max fixed bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent text-4xl md:text-5xl ">
      {title}
    </motion.h1>
  );
};

export const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <h1
      style={{
        fontFamily: 'Cinzel',
        whiteSpace: 'pre-wrap',
      }}
      className="text-center leading-[50px] w-max fixed bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent text-2xl md:text-3xl">
      {title}
    </h1>
  );
};
