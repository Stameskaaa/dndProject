import { useForm } from 'react-hook-form';
import {
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useGetCharacteristicListQuery,
  useUpdateCharacteristicMutation,
} from '@/features/characteristic/api';
import type { Characteristic } from '@/features/characteristic/types';
import { EditList } from '../ui/EditItem';
import { Button } from '@/components/ui/button';
import { EditWrapper } from '../ui/EditContainer';
import { useEditableForm } from '../hooks/useEditableItem';
import { Input } from '@/components/wrappers/forms/input/Input';

export const EditCharacteristic = () => {
  const { data, isLoading } = useGetCharacteristicListQuery();
  const { control, getValues, reset } = useForm<Characteristic>({ shouldUnregister: true });
  const [remove] = useDeleteCharacteristicMutation();
  const [create, { isLoading: createLoading }] = useCreateCharacteristicMutation();
  const [update, { isLoading: updateLoading }] = useUpdateCharacteristicMutation();

  const { open, setOpen, actions, submitAction, loadDeletedId } = useEditableForm<Characteristic>({
    reset,
    getData: getValues,
    create,
    update,
    remove,
    data,
  });

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-4 gap-3">
      <Button onClick={() => setOpen(true)}>Создать новую характестику</Button>
      <EditList
        loadDeletedId={loadDeletedId}
        isLoading={isLoading}
        actions={actions}
        data={data?.map(({ id, name }) => ({
          id,
          title: name,
        }))}
      />
      <EditWrapper
        isLoading={createLoading || updateLoading}
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
