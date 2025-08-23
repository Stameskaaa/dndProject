import {
  cloneElement,
  useState,
  type FC,
  type ReactElement,
  type ReactNode,
  Children,
  isValidElement,
} from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ModalDialogProps {
  button?: ReactNode;
  children?: ReactNode;
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
        setopen={setOpen}
        open={open}
        className="bg-brand-400 border-none h-[60%] w-[35%] !max-w-none">
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child as ReactElement<any>, { setOpen }) : child,
        )}
      </DialogContent>
    </Dialog>
  );
};
