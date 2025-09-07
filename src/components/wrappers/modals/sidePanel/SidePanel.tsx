import { Button } from '@/components/ui/button';
import { DialogTitle } from '@/components/ui/dialog';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SidePanelIndex } from '@/constants/zIndex';
import classNames from 'classnames';
import type { ReactNode } from 'react';

interface SidePanel {
  buttonTrigger?: ReactNode;
  contentClassname?: string;
  children?: ReactNode;
}

export const SidePanel: React.FC<SidePanel> = ({ buttonTrigger, contentClassname }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{buttonTrigger}</SheetTrigger>
      <SheetContent
        style={{ zIndex: SidePanelIndex }}
        className={classNames(contentClassname, 'w-[1500px]')}>
        <DialogTitle>Title</DialogTitle>
      </SheetContent>
    </Sheet>
  );
};
