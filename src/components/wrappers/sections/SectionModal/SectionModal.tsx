import { Outlet } from 'react-router-dom';
import { useRef, type ReactNode } from 'react';
import { CharacterSection } from '@/pages/character/ui/CharacterSection';

interface SectionModalProps {
  children: ReactNode;
  classNames?: string;
}

export const SectionModal: React.FC<SectionModalProps> = ({ children, classNames }) => {
  const parentRef = useRef<null | HTMLDivElement>(null);

  return (
    <CharacterSection className={classNames}>
      <div ref={parentRef} className="w-full h-full flex gap-6">
        {children}
        <Outlet context={parentRef} />
      </div>
    </CharacterSection>
  );
};
