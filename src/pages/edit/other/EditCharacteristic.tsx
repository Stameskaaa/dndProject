import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useGetCharacteristicListQuery,
  useUpdateCharacteristicMutation,
} from '@/features/characteristic/api';
import type { Characteristic } from '@/features/characteristic/types';
import { EditList } from '../ui/EditItem';
import { EditWrapper } from '../ui/EditContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/wrappers/forms/input/Input';

export const EditCharacteristic = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCharacteristicListQuery();
  const { control, getValues, reset } = useForm<Characteristic>({ shouldUnregister: true });
  const [deleteCharacteristic] = useDeleteCharacteristicMutation();
  const [create] = useCreateCharacteristicMutation();
  const [update] = useUpdateCharacteristicMutation();

  function submitAction() {
    const payload = getValues();
    if (payload.id) update(payload);
    else create(payload);
  }

  function actions(type: 'delete' | 'edit', id: number) {
    if (type === 'edit') {
      setOpen(true);
      const findedItem = data?.find((data) => data.id === id);
      if (findedItem) {
        reset(findedItem);
      }
    } else {
      deleteCharacteristic({ id });
    }
  }

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-4 gap-3">
      <Button onClick={() => setOpen(true)}>Создать новую характестику</Button>
      <EditList
        isLoading={isLoading}
        actions={actions}
        data={data?.map(({ id, name }) => ({
          id,
          title: name,
        }))}
      />
      <EditWrapper
        setOpen={setOpen}
        open={open}
        title={'Редактирование новости'}
        submitAction={submitAction}
        cancelAction={() => {}}>
        <Input
          required
          placeholder="Рассудок"
          message="Название характеристики"
          name="name"
          control={control}
        />
      </EditWrapper>
    </div>
  );
};
