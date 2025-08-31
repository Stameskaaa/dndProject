import type { ReactNode } from 'react';
import { Copy, Expand, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';

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

  return (
    <ModalWindow
      contentClassname="w-full !max-w-[600px]"
      open={!!id}
      setOpen={() => navigate(closeHref)}>
      <Content>{children}</Content>
    </ModalWindow>
  );
};

const Content = ({
  setOpen,
  children,
}: {
  setOpen?: (data: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <>
      {' '}
      <div className="absolute right-[10px] top-[10px] flex gap-1">
        <Button variant="ghost" onClick={() => alert('Ты лох')} size="icon">
          <Expand />
        </Button>
        <Button variant="ghost" onClick={() => alert('Ты лох')} size="icon">
          <Copy />
        </Button>
        <Button variant="ghost" onClick={() => setOpen?.(false)} size="icon">
          <X />
        </Button>
      </div>
      <div className="h-[full] w-full px-1 max-w-[800px] flex flex-col gap-4 overflow-y-auto">
        {children}
      </div>
    </>
  );
};
