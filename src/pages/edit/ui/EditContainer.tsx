import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/wrappers/typography/Text';
import { Separator } from '@/components/ui/separator';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';

export const EditWrapper = ({
  title,
  submitAction,
  cancelAction,
  children,
  setOpen,
  isLoading,
  open,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  submitAction: () => void;
  cancelAction: () => void;
  isLoading: boolean;
  children: ReactNode;
}) => {
  return (
    <ModalWindow
      contentClassname="w-[95%] h-[95%] max-h-[900px] block !max-w-[1600px] p-0"
      setOpen={setOpen}
      open={open}>
      <div className="flex h-full max-h-full flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-2">
        <Text color="brand-100" className="p-2" size="xl">
          {title || 'Изменение / Создание контента'}
        </Text>
        <Separator spacing="empty" />
        <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-4">{children}</div>
        <div className="flex gap-2 pt-2 justify-end">
          <Button isLoading={isLoading} onClick={submitAction} variant="success">
            Сохранить
          </Button>
          <Button disabled={isLoading} onClick={cancelAction} variant="secondary">
            Отменить изменения
          </Button>
        </div>
      </div>
    </ModalWindow>
  );
};
