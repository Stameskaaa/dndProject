import { useState, type ReactNode } from 'react';
import { Copy, Expand, Minimize, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import classNames from 'classnames';
import { Text } from '@/components/wrappers/typography/Text';

export const CharacterModalWrapper = ({
  id,
  title,
  children,
  closeHref,
}: {
  id?: string | number;
  title?: string;
  children: ReactNode;
  closeHref: string;
}) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <ModalWindow
      contentStyle={{ transition: 'max-width 0.3s' }}
      contentClassname={classNames(
        'w-[calc(100%-40px)] h-[70%] gap-0',
        expanded ? '!max-w-[1400px] ' : '!max-w-[700px]',
      )}
      open={!!id}
      setOpen={() => navigate(closeHref)}>
      <Content title={title} expanded={expanded} setExpanded={setExpanded}>
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
  title,
}: {
  expanded: boolean;
  setExpanded: (data: boolean) => void;
  setOpen?: (data: boolean) => void;
  children: ReactNode;
  title?: string;
}) => {
  return (
    <>
      <div className="flex bg-brand-400">
        <Button
          className="relative"
          variant="ghost"
          onClick={() => setExpanded(!expanded)}
          size="icon">
          {expanded ? <Minimize /> : <Expand />}
        </Button>
        <Button className="relative" variant="ghost" onClick={() => alert('Ты лох')} size="icon">
          <Copy />
        </Button>
        <Text className="mx-auto" size="xl">
          {title || ''}
        </Text>

        <Button className="relative" variant="ghost" onClick={() => setOpen?.(false)} size="icon">
          <X />
        </Button>
      </div>
      <div className="h-[full] w-full px-1 flex flex-col gap-4 overflow-y-auto">{children}</div>
    </>
  );
};
