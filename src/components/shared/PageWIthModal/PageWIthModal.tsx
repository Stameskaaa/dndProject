import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { FixedWidthSection } from '@/components/shared/Sections/FixedWidthSection';

interface PageWithModalProps {
  children: ReactNode;
}

export const PageWithModal: React.FC<PageWithModalProps> = ({ children }) => {
  return (
    <FixedWidthSection screen={true} className="flex gap-6">
      {children}
      <Outlet />
    </FixedWidthSection>
  );
};
