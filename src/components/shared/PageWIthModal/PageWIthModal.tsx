import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { FixedWidthSection } from '@/components/shared/Sections/FixedWidthSection';
import classNames from 'classnames';

interface PageWithModalProps {
  children: ReactNode;
  className?: string;
}

export const PageWithModal: React.FC<PageWithModalProps> = ({ children, className }) => {
  return (
    <FixedWidthSection screen={true} className={classNames('flex gap-6', className)}>
      {children}
      <Outlet />
    </FixedWidthSection>
  );
};
