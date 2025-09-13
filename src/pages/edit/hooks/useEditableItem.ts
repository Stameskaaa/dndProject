import { useState, useEffect } from 'react';
import { useForm, type FieldValues, type UseFormReset } from 'react-hook-form';
import { usePagination } from '@/hooks/usePagination';
import type { GetList } from '@/features/types';

type MutationHook<T> = () => readonly [(arg: T) => ReturnType<any>, { isLoading: boolean }];

export interface UseEditableItemProps<T extends FieldValues> {
  // TODO
  handleSubmit: any;
  queryHook: (args: any) => { data?: GetList<T>; isLoading: boolean; isFetching?: boolean };
  reset?: UseFormReset<T>;
  getValues?: () => T;
  createHook: MutationHook<T>;
  updateHook: MutationHook<T>;
  removeHook: MutationHook<{ id: number }>;
}

export function useEditableForm<T extends { id?: number | null } & FieldValues>({
  queryHook,
  reset,
  getValues,
  createHook,
  removeHook,
  updateHook,
  handleSubmit,
}: UseEditableItemProps<T>) {
  const { control, watch } = useForm<{ inputValue: string }>({ defaultValues: { inputValue: '' } });
  const [open, setOpen] = useState(false);
  const [loadDeletedId, setLoadDeletedId] = useState<number | null>(null);
  const [editableItem, setEditableItem] = useState<T | null>(null);
  const inputValue = watch('inputValue');

  const [remove] = removeHook();
  const [create, { isLoading: createLoading }] = createHook();
  const [update, { isLoading: updateLoading }] = updateHook();

  const pagintaionData = usePagination();
  const { data, isLoading, isFetching } = queryHook({
    page: pagintaionData.currentPage,
    limit: pagintaionData.limit,
    query: inputValue,
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
    const payload = getValues?.();
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
      const found = data?.data?.find((d) => d.id === id);
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
    pagintaionData,
    isLoading,
    isFetching,
    editLoading: createLoading || updateLoading,
    editableItem,
    setEditableItem,
    open,
    setOpen,
    setEditItem,
    // TODO ВАЛИДАЦИЯ
    // submitAction: handleSubmit(submitAction),
    submitAction,
    actions,
    loadDeletedId,
    inputControl: control,
    inputValue,
  };
}
