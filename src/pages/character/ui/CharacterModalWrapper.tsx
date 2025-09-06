import classNames from 'classnames';
import { useState, type ReactNode } from 'react';
import { Copy, Expand, Minimize, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export const CharacterModalWrapper = ({
  open,
  children,
  closeAction,
}: {
  open: boolean;
  children: ReactNode;
  closeAction: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ModalWindow
      contentStyle={{ transition: 'max-width 0.3s' }}
      contentClassname={classNames(
        'w-[calc(100%-40px)] h-[min(85vh,1000px)] max-h-[900px]',
        expanded ? '!max-w-[1400px] ' : '!max-w-[700px]',
      )}
      open={open}
      setOpen={closeAction}>
      <CloseAction expanded={expanded} setExpanded={setExpanded} />
      <div className="h-[full] w-full px-1 flex flex-col overflow-y-auto">{children}</div>
    </ModalWindow>
  );
};

const CloseAction = ({
  setOpen,
  expanded,
  setExpanded,
}: {
  setOpen?: (data: boolean) => void;
  expanded: boolean;
  setExpanded: (data: boolean) => void;
}) => {
  const width = useWindowWidth();

  return (
    <div className="absolute right-[10px] top-[-20px] z-1  flex gap-1 p-[2px] rounded-sm shadow shadow-black bg-brand-400">
      {width > 950 && (
        <Button variant="ghost" onClick={() => setExpanded(!expanded)} size="icon">
          {expanded ? <Minimize /> : <Expand />}
        </Button>
      )}
      <Button variant="ghost" onClick={() => alert('Да')} size="icon">
        <Copy />
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          setOpen?.(false);
        }}
        size="icon">
        <X />
      </Button>
    </div>
  );
};
