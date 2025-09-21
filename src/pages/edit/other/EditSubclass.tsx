import { useForm } from 'react-hook-form';
import {
  useCreateGodMutation,
  useDeleteGodMutation,
  useGetGodListQuery,
  useUpdateGodMutation,
} from '@/features/gods/api';
import { God } from '@/features/gods/types';
import { EditList } from '../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditSubclass = () => {
  const { control, reset, handleSubmit, getValues } = useForm<God>();

  return (
    <EditList
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetGodListQuery}
      createHook={useCreateGodMutation}
      updateHook={useUpdateGodMutation}
      removeHook={useDeleteGodMutation}
      cancelAction={reset}
      mapData={(data: God[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name, shortDescription }) => ({
          id,
          title: name,
          description: shortDescription,
        }));
      }}>
      <Input
        required
        placeholder="Пивной рыцарь"
        message="Название подкласса"
        name="name"
        control={control}
      />
      <TextareaMD
        hasMd
        required
        control={control}
        message="Описание умений и способностей"
        name="md_description"
      />
    </EditList>
  );
};
