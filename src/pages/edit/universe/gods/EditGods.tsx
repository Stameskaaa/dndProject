import { useForm } from 'react-hook-form';
import {
  useCreateGodMutation,
  useDeleteGodMutation,
  useGetGodListQuery,
  useUpdateGodMutation,
} from '@/features/gods/api';
import type { God } from '@/features/gods/types';
import { trait_types } from '@/mock/mock';
import { EditList } from '../../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditGods = () => {
  const { control, reset, getValues, handleSubmit } = useForm<God>();

  return (
    <EditList
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetGodListQuery}
      createHook={useCreateGodMutation}
      updateHook={useUpdateGodMutation}
      removeHook={useDeleteGodMutation}
      mapData={(data: God[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name, shortDescription }) => ({
          id,
          title: name,
          description: shortDescription,
        }));
      }}>
      <Input required placeholder="Кайдор" message="Имя бога" name="name" control={control} />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите миры"
          required
          multiple
          label="Миры"
          control={control}
          name="worldIds"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Input
          required
          className="flex-1"
          message="Прикрепите фотографию"
          placeholder="https://image.png"
          name="src"
          control={control}
        />
      </div>

      <Input
        required
        placeholder="Бог простых ремесел и честного труда"
        message="Короткое описание (1-2 предложения)"
        name="shortDescription"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="mdDescription" />
    </EditList>
  );
};
