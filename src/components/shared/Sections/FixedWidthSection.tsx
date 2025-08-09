import classNames from 'classnames';
import type { HTMLAttributes } from 'react';

interface FixedWidthSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  screen?: boolean;
  className?: string;
}

export const FixedWidthSection: React.FC<FixedWidthSectionProps> = ({
  children,
  className = '',
  screen = false,
  ...props
}) => {
  return (
    <section
      {...props}
      className={classNames(
        'w-full max-w-[var(--width-max-container)] px-2 sm:px-3 md:px-4 lg:px-9',
        screen ? 'h-screen' : '',
        className,
      )}>
      {children}
    </section>
  );
};
