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
  buttonTrigger?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  setOpen?: (state: boolean) => void;
}

export const ModalWindow: FC<ModalDialogProps> = ({
  buttonTrigger,
  children,
  open: externalOpen,
  setOpen: externalSetOpen,
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);

  const open = externalOpen ?? internalOpen;
  const setOpen = externalSetOpen ?? setInternalOpen;

  return (
    <Dialog>
      {buttonTrigger && (
        <DialogTrigger onClick={() => setOpen(true)} asChild>
          {buttonTrigger}
        </DialogTrigger>
      )}
      <DialogContent
        open={open}
        setopen={setOpen}
        className="bg-brand-400 border-none h-[60%] w-[35%] !max-w-none">
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child as ReactElement<any>, { setOpen }) : child,
        )}
      </DialogContent>
    </Dialog>
  );
};
