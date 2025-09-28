import { useForm } from 'react-hook-form';
import {
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useGetCharacteristicListQuery,
  useUpdateCharacteristicMutation,
} from '@/features/characteristic/api';
import type { Characteristic } from '@/features/characteristic/types';
import { EditList } from '../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';

export const EditCharacteristic = () => {
  const { control, getValues, reset, handleSubmit } = useForm<Characteristic>({
    shouldUnregister: true,
  });

  return (
    <EditList<Characteristic>
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetCharacteristicListQuery}
      createHook={useCreateCharacteristicMutation}
      updateHook={useUpdateCharacteristicMutation}
      removeHook={useDeleteCharacteristicMutation}
      mapData={(data: Characteristic[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name }) => ({ id, title: name }));
      }}>
      <Input
        required
        placeholder="Рассудок"
        message="Название характеристики"
        name="name"
        control={control}
      />
    </EditList>
  );
};
