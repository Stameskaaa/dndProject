import { Outlet } from 'react-router-dom';
import { useRef, type ReactNode } from 'react';
import { Section } from '../section/Section';

interface SectionModalProps {
  children: ReactNode;
  classNames?: string;
}

export const SectionModal: React.FC<SectionModalProps> = ({ children, classNames }) => {
  const parentRef = useRef<null | HTMLDivElement>(null);

  return (
    <Section fixedWidth={true} screen={true} className={classNames}>
      <div ref={parentRef} className="w-full h-full flex gap-6">
        {children}
        <Outlet context={parentRef} />
      </div>
    </Section>
  );
};
