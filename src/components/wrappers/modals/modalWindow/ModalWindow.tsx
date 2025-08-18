import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cloneElement, useState, type FC, type ReactElement, type ReactNode } from 'react';

interface ModalDialogProps {
  button?: ReactNode;
  children?: ReactElement<any>;
}

export const ModalWindow: FC<ModalDialogProps> = ({ button, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog>
      {button && (
        <DialogTrigger onClick={() => setOpen(true)} asChild>
          {button}
        </DialogTrigger>
      )}
      <DialogContent
        setOpen={setOpen}
        open={open}
        className="bg-brand-400 border-none h-[60%] w-[35%] !max-w-none">
        {children && cloneElement(children, { setOpen })}
      </DialogContent>
    </Dialog>
  );
};
