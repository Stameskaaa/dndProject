import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', ...props }) => {
  return (
    <section {...props} className={`w-full ${className}`}>
      {children}
    </section>
  );
};
