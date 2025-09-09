import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';

export const EditWrapper = ({
  title,
  saveAction,
  cancelAction,
  children,
}: {
  title: string;
  saveAction: () => void;
  cancelAction: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-4">
      <div className="flex gap-2 justify-between">
        <Text size="2xl" color="brand-100">
          {title}
        </Text>
        <ModalWindow contentClassname="w-[600px]" buttonTrigger={<Button>Выбрать правило</Button>}>
          <div>Потом придумаю</div>
        </ModalWindow>
      </div>
      <Separator spacing="equalSmall" />

      <div className="flex flex-col gap-3">{children}</div>
      <div className="flex gap-2 pt-2 justify-end">
        <Button onClick={saveAction} variant="success">
          Сохранить
        </Button>
        <Button onClick={cancelAction} variant="secondary">
          Отменить изменения
        </Button>
      </div>
    </div>
  );
};
