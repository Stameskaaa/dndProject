import { useEffect, type HTMLAttributes, type ReactNode } from 'react';
import styles from './StartBackground.module.css';

interface StarsBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({ children, ...props }) => {
  useEffect(() => {
    const finisher = new (window as any).FinisherHeader({
      count: 70,
      size: {
        min: 2,
        max: 8,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0,
          max: 0.5,
        },
        y: {
          min: 0,
          max: 0.5,
        },
      },
      colors: {
        background: '#1c2224',
        particles: ['#FFA500', '#FF8C00', '#FFC857'],
      },
      blending: 'overlay',
      opacity: {
        center: 1,
        edge: 0,
      },
      skew: -2.5,
      shapes: ['t'],
    });

    // const canvas = document.querySelector('.finisher-header canvas');
    // // if (canvas) {
    // //   // @ts-ignore
    // //   canvas.style.zIndex = '0';
    // // }

    return () => {
      finisher?.destroy?.();
    };
  }, []);

  return (
    <div className={`finisher-header w-full h-[1400px] ${styles.canvas}`} {...props}>
      {children}
    </div>
  );
};
