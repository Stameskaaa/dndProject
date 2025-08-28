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
import classNames from 'classnames';

interface ModalDialogProps {
  buttonTrigger?: ReactNode;
  contentStyles?: string;
  children?: ReactNode;
  open?: boolean;
  setOpen?: (state: boolean) => void;
}

export const ModalWindow: FC<ModalDialogProps> = ({
  buttonTrigger,
  children,
  contentStyles,
  open: externalOpen,
  setOpen: externalSetOpen,
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);

  const open = externalOpen ?? internalOpen;
  const setOpen = externalSetOpen ?? setInternalOpen;

  // TODO Можно на esc поставить закрытие
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
        className={classNames(
          'bg-brand-400 border-none h-[60%] w-[35%] !max-w-none',
          contentStyles,
        )}>
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child as ReactElement<any>, { setOpen }) : child,
        )}
      </DialogContent>
    </Dialog>
  );
};
