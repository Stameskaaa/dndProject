import { useForm } from 'react-hook-form';
import {
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useGetCharacteristicListQuery,
  useUpdateCharacteristicMutation,
} from '@/features/characteristic/api';
import type { Characteristic } from '@/features/characteristic/types';
import { EditList } from '../ui/EditItem';
import { usePagination } from '@/hooks/usePagination';
import { useEditableForm } from '../hooks/useEditableItem';
import { Input } from '@/components/wrappers/forms/input/Input';

export const EditCharacteristic = () => {
  const { data, isLoading } = useGetCharacteristicListQuery();
  const { control, getValues, reset } = useForm<Characteristic>({ shouldUnregister: true });
  const pagintaionData = usePagination({ defaultLimit: 100 });
  const [remove] = useDeleteCharacteristicMutation();
  const [create, { isLoading: createLoading }] = useCreateCharacteristicMutation();
  const [update, { isLoading: updateLoading }] = useUpdateCharacteristicMutation();

  const { open, setOpen, actions, submitAction, loadDeletedId, inputControl } =
    useEditableForm<Characteristic>({
      queryHook: useGetCharacteristicListQuery,
      createHook: useCreateCharacteristicMutation,
      reset,
      getData: getValues,
      create,
      update,
      remove,
    });

  return (
    <EditList
      buttActionsLoading={createLoading || updateLoading}
      pagintaionData={pagintaionData}
      inputControl={inputControl}
      submitAction={submitAction}
      cancelAction={() => {}}
      open={open}
      setOpen={setOpen}
      loadDeletedId={loadDeletedId}
      isLoading={isLoading}
      actions={actions}
      data={data?.map(({ id, name }) => ({
        id,
        title: name,
      }))}>
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
