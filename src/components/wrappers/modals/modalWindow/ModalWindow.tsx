import {
  cloneElement,
  useState,
  type FC,
  type ReactElement,
  type ReactNode,
  Children,
  isValidElement,
  type CSSProperties,
} from 'react';
import classNames from 'classnames';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ModalDialogProps {
  buttonTrigger?: ReactNode;
  zIndex?: number;
  contentClassname?: string;
  children?: ReactNode;
  open?: boolean;
  setOpen?: (state: boolean) => void;
  contentStyle?: CSSProperties;
}

export const ModalWindow: FC<ModalDialogProps> = ({
  buttonTrigger,
  children,
  contentClassname,
  zIndex,
  open: externalOpen,
  setOpen: externalSetOpen,
  contentStyle,
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
        zIndex={zIndex}
        open={open}
        setOpen={setOpen}
        style={contentStyle}
        className={classNames(
          'bg-brand-400 border-none h-[60%] w-[400px] !max-w-none',
          contentClassname,
        )}>
        {Children.map(children, (child) =>
          isValidElement(child) && typeof child.type !== 'string'
            ? cloneElement(child as ReactElement<any>, { setOpen })
            : child,
        )}
      </DialogContent>
    </Dialog>
  );
};
