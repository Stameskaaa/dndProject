import classNames from 'classnames';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  screen?: boolean;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', screen, ...props }) => {
  return (
    <section {...props} className={classNames('w-full', screen ? 'h-screen' : '', className)}>
      {children}
    </section>
  );
};
