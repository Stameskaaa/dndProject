import { useState, useEffect } from 'react';
import type { FieldValues, UseFormReset } from 'react-hook-form';

interface UseEditableItemProps<T extends FieldValues> {
  reset?: UseFormReset<T>;
  getData?: () => T;
  create: (payload: T) => Promise<any>;
  update: (payload: T) => Promise<any>;
  remove: ({ id }: { id: number }) => Promise<any>;
  data?: T[];
}

export function useEditableForm<T extends { id?: number | null } & FieldValues>({
  reset,
  getData,
  create,
  update,
  remove,
  data,
}: UseEditableItemProps<T>) {
  const [open, setOpen] = useState(false);
  const [loadDeletedId, setLoadDeletedId] = useState<number | null>(null);
  const [editableItem, setEditableItem] = useState<T | null>(null);

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
    editableItem,
    setEditableItem,
    open,
    setOpen,
    setEditItem,
    submitAction,
    actions,
    loadDeletedId,
  };
}
