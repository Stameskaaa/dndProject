import { useState, type ReactNode } from 'react';
import { Copy, Expand, Minimize, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import classNames from 'classnames';

export const CharacterModalWrapper = ({
  id,
  children,
  closeHref,
}: {
  id?: string | number;
  children: ReactNode;
  closeHref: string;
}) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <ModalWindow
      contentStyle={{ transition: 'max-width 0.3s' }}
      contentClassname={classNames(
        'w-[calc(100%-40px)] h-[70%] max-h-[900px]',
        expanded ? '!max-w-[1400px] ' : '!max-w-[700px]',
      )}
      open={!!id}
      setOpen={() => navigate(closeHref)}>
      <Content expanded={expanded} setExpanded={setExpanded}>
        {children}
      </Content>
    </ModalWindow>
  );
};

const Content = ({
  setOpen,
  children,
  setExpanded,
  expanded,
}: {
  expanded: boolean;
  setExpanded: (data: boolean) => void;
  setOpen?: (data: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="absolute right-[10px] top-[10px] z-1  flex gap-1 p-[2px] rounded-sm shadow shadow-black bg-brand-400">
        <Button variant="ghost" onClick={() => setExpanded(!expanded)} size="icon">
          {expanded ? <Minimize /> : <Expand />}
        </Button>
        <Button variant="ghost" onClick={() => alert('Да')} size="icon">
          <Copy />
        </Button>
        <Button variant="ghost" onClick={() => setOpen?.(false)} size="icon">
          <X />
        </Button>
      </div>
      <div className="h-[full] w-full px-1 flex flex-col overflow-y-auto">{children}</div>
    </>
  );
};
