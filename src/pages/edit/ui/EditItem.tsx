import { type ReactNode } from 'react';
import { Pencil, X } from 'lucide-react';
import type { FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Spinner } from '@/components/wrappers/loaders/spinner/Spinner';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { useEditableForm, type UseEditableItemProps } from '../hooks/useEditableItem';
import { Pagination } from '@/components/wrappers/navigation/pagination/Pagination';
import { Section } from '@/components/wrappers/sections/section/Section';
import { Badge } from '@/components/wrappers/badge/Badge';

interface EditableItem {
  id: number;
  title?: string;
  description?: string;
}

interface EditListProps<T extends { id?: number | null } & FieldValues>
  extends UseEditableItemProps<T> {
  children: ReactNode;
  mapData: (data: T[] | undefined) => EditableItem[];
}

export const EditList = <T extends { id?: number | null }>({
  children,
  queryHook,
  createHook,
  updateHook,
  removeHook,
  mapData,
  methods,
}: EditListProps<T>) => {
  const {
    open,
    setOpen,
    actions,
    submitAction,
    pagintaionData,
    loadDeletedId,
    inputControl,
    editLoading,
    data,
    isLoading,
  } = useEditableForm<T>({
    queryHook,
    createHook,
    updateHook,
    removeHook,
    methods,
  });
  const {
    formState: { isDirty },
  } = methods;

  const editableData = mapData(data?.data);

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 bg-brand-500 flex-1 h-full p-4 gap-3 min-h-0">
      <div className="flex flex-col flex-1 h-full gap-3">
        <div className="flex gap-2 h-[36px]">
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

        <div className="flex-1 min-h-0 h-full overflow-y-auto flex justify-center overscroll-contain">
          {isLoading ? (
            <Spinner className="m-auto" />
          ) : !Array.isArray(editableData) ? (
            <Text className="m-auto">Произошла ошибка</Text>
          ) : editableData.length === 0 ? (
            <Text className="m-auto">Данных нет</Text>
          ) : (
            <div className="flex flex-col w-full gap-3">
              {editableData.map((item) => (
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
        {/* TODO */}
        <div className="mt-auto">
          {data?.meta && (
            <Pagination
              onPageChange={pagintaionData.onPageChange}
              className="mt-auto"
              total={data?.meta.total}
              limit={pagintaionData.limit}
              // TODO мб поменять из хука взять
              // currentPage={data?.meta.page}
              currentPage={pagintaionData.currentPage}
            />
          )}
        </div>
      </div>
      <ModalWindow
        contentClassname="w-[95%] h-[95%] max-h-[900px] block !max-w-[1600px] p-0 bg-transparent"
        setOpen={setOpen}
        open={open}>
        <Section className="flex h-full max-h-full">
          <div className="flex-1 flex flex-col bg-brand-400 border-1 rounded-md border-brand-300 p-4">
            <div className="flex justify-between gap-4 items-center">
              <Text color="brand-100" className="p-2" size="xl">
                {'Изменение / Создание контента'}
              </Text>

              {isDirty && <Badge className="!bg-blue-500">Изменения не сохранены</Badge>}
            </div>
            <Separator spacing="empty" />
            <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-4">{children}</div>
            <div className="flex gap-2 pt-2 justify-end">
              <Button isLoading={editLoading} onClick={submitAction} variant="success">
                Сохранить
              </Button>
            </div>
          </div>
        </Section>
      </ModalWindow>
    </div>
  );
};

type ActionsType = (type: 'edit' | 'delete', id: number) => void;

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
