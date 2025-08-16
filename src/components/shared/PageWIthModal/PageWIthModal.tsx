import { useRef, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { FixedWidthSection } from '@/components/shared/Sections/FixedWidthSection';

interface PageWithModalProps {
  children: ReactNode;
  classNames?: string;
}

export const PageWithModal: React.FC<PageWithModalProps> = ({ children, classNames }) => {
  const parentRef = useRef<null | HTMLDivElement>(null);

  return (
    <FixedWidthSection screen={true} className={classNames}>
      <div ref={parentRef} className="w-full h-full flex gap-6">
        {children}
        <Outlet context={parentRef} />
      </div>
    </FixedWidthSection>
  );
};
