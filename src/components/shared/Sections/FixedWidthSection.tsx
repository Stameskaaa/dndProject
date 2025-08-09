import type { HTMLAttributes } from 'react';

interface FixedWidthSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const FixedWidthSection: React.FC<FixedWidthSectionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <section
      {...props}
      className={`w-full max-w-[var(--width-max-container)] px-2 sm:px-3 md:px-4 lg:px-9  ${className}`}>
      {children}
    </section>
  );
};
