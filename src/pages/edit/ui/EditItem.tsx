import { type ReactNode } from 'react';
import { Pencil, X } from 'lucide-react';
import type { Control } from 'react-hook-form';
import type { PaginateHookReturn } from '@/hooks/usePagination';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { Spinner } from '@/components/wrappers/loaders/spinner/Spinner';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { Pagination } from '@/components/wrappers/navigation/pagination/Pagination';
import { Input } from '@/components/wrappers/forms/input/Input';

interface EditableItem {
  id: number;
  title?: string;
  description?: string;
}

type ActionsType = (type: 'edit' | 'delete', id: number) => void;

export const EditList = ({
  data,
  meta,
  actions,
  setOpen,
  open,
  isLoading,
  loadDeletedId,
  buttActionsLoading,
  pagintaionData,
  children,
  submitAction,
  inputControl,
  cancelAction,
}: {
  data?: EditableItem[];
  meta?: { total: number; limit: number };
  actions: ActionsType;
  open: boolean;
  setOpen: (data: boolean) => void;
  isLoading: boolean;
  buttActionsLoading: boolean;
  inputControl: Control<any>;
  loadDeletedId: number | null;
  pagintaionData: PaginateHookReturn;
  children: ReactNode;
  submitAction: () => void;
  cancelAction: () => void;
}) => {
  //   useEffect(() => {
  //   if (data?.totalPages) {
  //     pagintaionData.setTotalPages(data.totalPages);
  //   }
  // }, [data?.totalPages]);

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300  h-full p-4 gap-3">
      <div className="flex flex-col gap-3 h-full overflow-y-auto">
        <div className="flex gap-2">
          <Input
            placeholder="Поиск по названию..."
            className="flex-4"
            control={inputControl}
            name="inputValue"
          />
          <Button variant="secondary" className="min-w-[160px]" onClick={() => setOpen(true)}>
            Создать
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          {isLoading ? (
            <Spinner className="m-auto" />
          ) : !Array.isArray(data) ? (
            <Text className="m-auto">Произошла ошибка</Text>
          ) : data.length === 0 ? (
            <Text className="m-auto">Данных нет</Text>
          ) : (
            <div className="flex flex-col w-full gap-3">
              {data.map((item) => (
                <EditItem
                  isLoading={item.id === loadDeletedId}
                  key={item.id}
                  actions={actions}
                  {...item}
                />
              ))}
            </div>
          )}
        </div>

        {meta && <Pagination className="mt-auto" {...pagintaionData} />}
      </div>
      <ModalWindow
        contentClassname="w-[95%] h-[95%] max-h-[900px] block !max-w-[1600px] p-0"
        setOpen={setOpen}
        open={open}>
        <div className="flex h-full max-h-full flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-2">
          <Text color="brand-100" className="p-2" size="xl">
            {'Изменение / Создание контента'}
          </Text>
          <Separator spacing="empty" />
          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-4">{children}</div>
          <div className="flex gap-2 pt-2 justify-end">
            <Button isLoading={buttActionsLoading} onClick={submitAction} variant="success">
              Сохранить
            </Button>
            <Button disabled={buttActionsLoading} onClick={cancelAction} variant="secondary">
              Отменить изменения
            </Button>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export const EditItem = ({
  isLoading,
  title,
  description,
  actions,
  id,
}: EditableItem & { actions: ActionsType; isLoading: boolean }) => {
  return (
    <div className="flex justify-between gap-2 border-1 items-start border-brand-200 p-3 rounded-md">
      <div>
        <Text size="xl">
          Название:{` `}
          {title}
        </Text>
        <Text>
          {' '}
          Описание:{` `}
          {description}
        </Text>
      </div>
      <div className="flex gap-2">
        <Button disabled={isLoading} onClick={() => actions('edit', id)}>
          <Pencil />
        </Button>
        <Button isLoading={isLoading} onClick={() => actions('delete', id)}>
          <X />
        </Button>
      </div>
    </div>
  );
};
