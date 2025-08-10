import { forwardRef } from 'react';
import { Text } from '../../Typography/Text';
import src from '../../../../assets/bg2.jpg';

interface HoverZoomCardProps {
  animateIndex?: number;
  onClick: () => void;
}

export const HoverZoomCard = forwardRef<HTMLDivElement, HoverZoomCardProps>(
  ({ onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        {...props}
        className="relative cursor-pointer group w-full bg-brand-400 shadow-xl shadow-black h-[160px] rounded-lg flex flex-col justify-between">
        <div className="absolute right-0 h-full max-w-full rounded-lg z-0 overflow-hidden">
          <img
            src={src}
            alt=""
            className="w-auto h-full object-cover group-hover:scale-110 duration-400"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #1c2224 10%, transparent 100%)',
            }}
          />
        </div>
        <div className="z-0 p-4 h-full">
          <span className="flex flex-col gap-1">
            <Text color="text-primary">Авен</Text>
            <Text color="text-muted">Долина гурван гол</Text>
          </span>
        </div>
      </div>
    );
  },
);

HoverZoomCard.displayName = 'HoverZoomCard';
