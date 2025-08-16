import { defaultPaddings } from '@/constants/paddings';
import classNames from 'classnames';
import { forwardRef, type HTMLAttributes } from 'react';

interface FixedWidthSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  screen?: boolean;
  className?: string;
}

export const FixedWidthSection = forwardRef<HTMLDivElement, FixedWidthSectionProps>(
  ({ children, className = '', screen = false, ...props }, ref) => {
    return (
      <section
        {...props}
        ref={ref}
        className={classNames(
          'w-full max-w-[var(--width-max-container)]',
          defaultPaddings,
          screen ? 'min-h-screen' : '',
          className,
        )}>
        {children}
      </section>
    );
  },
);
