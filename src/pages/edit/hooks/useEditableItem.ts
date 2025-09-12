import { usePagination } from '@/hooks/usePagination';
import { useState, useEffect } from 'react';
import { useForm, type FieldValues, type UseFormReset } from 'react-hook-form';

type MutationHook<T> = () => readonly [(arg: T) => ReturnType<any>, { isLoading: boolean }];

interface UseEditableItemProps<T extends FieldValues> {
  // TODO
  queryHook: (args: any) => { data?: T[]; isLoading: boolean; isFetching?: boolean };
  reset?: UseFormReset<T>;
  getData?: () => T;
  create: (payload: T) => Promise<any>;
  update: (payload: T) => Promise<any>;
  remove: ({ id }: { id: number }) => Promise<any>;
  createHook: MutationHook<T>;
}

export function useEditableForm<T extends { id?: number | null } & FieldValues>({
  queryHook,
  reset,
  getData,
  create,
  update,
  remove,
  createHook,
}: UseEditableItemProps<T>) {
  const { control, watch } = useForm<{ inputValue: string }>({ defaultValues: { inputValue: '' } });
  const [open, setOpen] = useState(false);
  const [loadDeletedId, setLoadDeletedId] = useState<number | null>(null);
  const [editableItem, setEditableItem] = useState<T | null>(null);
  const inputValue = watch('inputValue');

  const pagintaionData = usePagination();
  const { data, isLoading } = queryHook({
    page: pagintaionData.currentPage,
    limit: pagintaionData.totalPages,
    q: inputValue,
  });

  useEffect(() => {
    if (!open) {
      reset?.();
      setEditableItem(null);
    }
  }, [open, reset]);

  function setEditItem(item: T) {
    setEditableItem(item);
    reset?.(item);
    setOpen(true);
  }

  async function submitAction() {
    const payload = getData?.();
    if (!payload) return;
    if (editableItem) {
      await update({ ...editableItem, ...payload });
    } else {
      await create(payload);
    }
    setOpen(false);
  }

  async function actions(type: 'delete' | 'edit', id: number) {
    if (type === 'edit') {
      const found = data?.find((d) => d.id === id);
      if (found) {
        setEditItem(found);
      }
    } else {
      setLoadDeletedId(id);
      await remove({ id });
      setLoadDeletedId(null);
    }
  }

  return {
    data,
    isLoading,
    editableItem,
    setEditableItem,
    open,
    setOpen,
    setEditItem,
    submitAction,
    actions,
    loadDeletedId,
    inputControl: control,
    inputValue,
  };
}
