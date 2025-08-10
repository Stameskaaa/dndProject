import { defaultPaddings } from '@/constants/paddings';
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
        'w-full max-w-[var(--width-max-container)]',
        defaultPaddings,
        screen ? 'min-h-screen' : '',
        className,
      )}>
      {children}
    </section>
  );
};
