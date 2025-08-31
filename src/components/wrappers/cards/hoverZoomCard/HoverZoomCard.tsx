import classNames from 'classnames';
import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';

interface HoverZoomCardProps {
  title: ReactNode;
  description: ReactNode;
  src: string;
  active: boolean;
  onClick: () => void;
  animateIndex?: number;
}

export const HoverZoomCard = forwardRef<HTMLDivElement, HoverZoomCardProps>(
  ({ onClick, title, description, active, src, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        {...props}
        className={classNames(
          active ? '!border-brand-100 border-2' : '',
          'relative cursor-pointer group w-full border border-transparent transition-colors duration-300 bg-brand-400 shadow-xl shadow-black h-[160px] rounded-lg flex flex-col justify-between',
        )}>
        <div className="absolute right-0 h-full max-w-full rounded-lg z-0 overflow-hidden">
          {src && (
            <img
              src={src}
              alt=""
              className="w-auto h-full object-cover group-hover:scale-110 duration-400"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #1c2224 10%, transparent 100%)',
            }}
          />
        </div>
        <div className="z-0 p-4 h-full flex flex-col gap-1">
          {title}
          {description}
        </div>
      </div>
    );
  },
);

HoverZoomCard.displayName = 'HoverZoomCard';

export const MotionHoverZoomCard = motion.create(HoverZoomCard);
